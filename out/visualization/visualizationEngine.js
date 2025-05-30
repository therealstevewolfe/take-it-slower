"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualizationEngine = void 0;
const vscode = __importStar(require("vscode"));
const task_1 = require("../taskManager/task");
/**
 * Responsible for visualizing tasks in the VS Code UI
 */
class VisualizationEngine {
    constructor(taskManager, settingsManager, context) {
        this.disposables = [];
        this.taskManager = taskManager;
        this.settingsManager = settingsManager;
        this.context = context;
        // Create view providers
        this.activityViewProvider = new ActivityViewProvider(taskManager, settingsManager, context);
        this.timelineViewProvider = new TimelineViewProvider(taskManager, settingsManager, context);
        // Register view providers
        this.registerViewProviders();
        // Listen for task changes
        this.taskManager.addTaskListener(task => this.onTaskChanged(task));
    }
    /**
     * Register view providers with VS Code
     */
    registerViewProviders() {
        // Register activity view provider
        const activityViewDisposable = vscode.window.registerTreeDataProvider('aiSummarizerActivityView', this.activityViewProvider);
        // Register timeline view provider
        const timelineViewDisposable = vscode.window.registerTreeDataProvider('aiSummarizerTimelineView', this.timelineViewProvider);
        // Add to disposables
        this.disposables.push(activityViewDisposable, timelineViewDisposable);
    }
    /**
     * Handle task changes
     */
    onTaskChanged(task) {
        // Refresh views
        this.activityViewProvider.refresh();
        this.timelineViewProvider.refresh();
        // Show notifications if enabled
        this.showTaskNotifications(task);
    }
    /**
     * Show notifications for task changes
     */
    showTaskNotifications(task) {
        // Check if notifications are enabled
        if (!this.settingsManager.getNotificationsEnabled()) {
            return;
        }
        // Check notification settings based on task status
        switch (task.getStatus()) {
            case task_1.TaskStatus.InProgress:
                if (this.settingsManager.getShowTaskStartNotifications()) {
                    vscode.window.showInformationMessage(`AI Assistant started: ${task.getName()}`);
                }
                break;
            case task_1.TaskStatus.Completed:
                if (this.settingsManager.getShowTaskCompletionNotifications()) {
                    vscode.window.showInformationMessage(`AI Assistant completed: ${task.getName()}`);
                }
                break;
            case task_1.TaskStatus.Error:
                if (this.settingsManager.getShowErrorNotifications()) {
                    vscode.window.showErrorMessage(`AI Assistant error: ${task.getName()}`);
                }
                break;
        }
    }
    /**
     * Toggle the activity panel
     */
    togglePanel() {
        vscode.commands.executeCommand('workbench.view.extension.aiSummarizer');
    }
    /**
     * Focus on the current task
     */
    focusCurrentTask() {
        const activeTasks = this.taskManager.getActiveTasks();
        if (activeTasks.length > 0) {
            // Focus on the first active task
            this.activityViewProvider.focusTask(activeTasks[0].getId());
        }
    }
    /**
     * Collapse all task groups
     */
    collapseAll() {
        this.activityViewProvider.collapseAll();
    }
    /**
     * Expand all task groups
     */
    expandAll() {
        this.activityViewProvider.expandAll();
    }
    /**
     * Clean up resources
     */
    dispose() {
        this.disposables.forEach(d => d.dispose());
    }
}
exports.VisualizationEngine = VisualizationEngine;
/**
 * Tree data provider for the activity view
 */
class ActivityViewProvider {
    constructor(taskManager, settingsManager, context) {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.taskManager = taskManager;
        this.settingsManager = settingsManager;
        this.context = context;
    }
    /**
     * Refresh the tree view
     */
    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }
    /**
     * Focus on a specific task
     */
    focusTask(taskId) {
        // In a real implementation, this would reveal and select the task in the tree view
        // For now, we'll just refresh the view
        this.refresh();
    }
    /**
     * Collapse all task groups
     */
    collapseAll() {
        vscode.commands.executeCommand('aiSummarizerActivityView.collapseAll');
    }
    /**
     * Expand all task groups
     */
    expandAll() {
        // There's no built-in command to expand all, so we'd need to implement this ourselves
        // For now, we'll just refresh the view
        this.refresh();
    }
    /**
     * Get tree item for a given element
     */
    getTreeItem(element) {
        return element;
    }
    /**
     * Get children of a given element
     */
    getChildren(element) {
        if (!element) {
            // Root level - group by assistant
            return Promise.resolve(this.getAssistantGroups());
        }
        else if (element.contextValue === 'assistant') {
            // Assistant level - get tasks for this assistant
            return Promise.resolve(this.getTasksForAssistant(element.id));
        }
        else if (element.contextValue === 'task') {
            // Task level - get subtasks
            return Promise.resolve(this.getSubtasks(element.id));
        }
        return Promise.resolve([]);
    }
    /**
     * Get assistant groups
     */
    getAssistantGroups() {
        // Get all tasks grouped by assistant
        const assistants = new Map();
        // Group task IDs by assistant
        this.taskManager.getRootTasks().forEach(task => {
            const assistantId = task.getAssistantId();
            if (!assistants.has(assistantId)) {
                assistants.set(assistantId, []);
            }
            assistants.get(assistantId).push(task.getId());
        });
        // Create tree items for each assistant
        return Array.from(assistants.entries()).map(([assistantId, taskIds]) => {
            const item = new TaskTreeItem(assistantId, assistantId, vscode.TreeItemCollapsibleState.Expanded);
            item.contextValue = 'assistant';
            item.iconPath = new vscode.ThemeIcon('robot');
            return item;
        });
    }
    /**
     * Get tasks for a specific assistant
     */
    getTasksForAssistant(assistantId) {
        // Get all root tasks for this assistant
        const tasks = this.taskManager.getTasksByAssistant(assistantId)
            .filter(task => !task.getParentId()); // Only root tasks
        // Create tree items for each task
        return tasks.map(task => this.createTaskTreeItem(task));
    }
    /**
     * Get subtasks for a specific task
     */
    getSubtasks(taskId) {
        const task = this.taskManager.getTask(taskId);
        if (!task) {
            return [];
        }
        // Get all child tasks
        const childIds = task.getChildIds();
        const childTasks = childIds
            .map(id => this.taskManager.getTask(id))
            .filter((task) => task !== undefined);
        // Create tree items for each subtask
        return childTasks.map(task => this.createTaskTreeItem(task));
    }
    /**
     * Create a tree item for a task
     */
    createTaskTreeItem(task) {
        // Determine collapsible state based on whether the task has children
        const collapsibleState = task.getChildIds().length > 0
            ? vscode.TreeItemCollapsibleState.Collapsed
            : vscode.TreeItemCollapsibleState.None;
        // Create tree item
        const item = new TaskTreeItem(task.getId(), task.getName(), collapsibleState);
        // Set context value
        item.contextValue = 'task';
        // Set description based on status and progress
        if (task.getStatus() === task_1.TaskStatus.InProgress && task.getProgress() > 0) {
            item.description = `${task.getProgress()}%`;
        }
        else {
            item.description = task.getStatus();
        }
        // Set icon based on status
        switch (task.getStatus()) {
            case task_1.TaskStatus.Completed:
                item.iconPath = new vscode.ThemeIcon('check', new vscode.ThemeColor('terminal.ansiGreen'));
                break;
            case task_1.TaskStatus.InProgress:
                item.iconPath = new vscode.ThemeIcon('sync', new vscode.ThemeColor('terminal.ansiBlue'));
                break;
            case task_1.TaskStatus.Queued:
                item.iconPath = new vscode.ThemeIcon('clock', new vscode.ThemeColor('terminal.ansiYellow'));
                break;
            case task_1.TaskStatus.Error:
                item.iconPath = new vscode.ThemeIcon('error', new vscode.ThemeColor('terminal.ansiRed'));
                break;
            case task_1.TaskStatus.Analyzing:
                item.iconPath = new vscode.ThemeIcon('beaker', new vscode.ThemeColor('terminal.ansiMagenta'));
                break;
        }
        // Set tooltip with detailed information
        item.tooltip = this.createTaskTooltip(task);
        return item;
    }
    /**
     * Create a tooltip for a task
     */
    createTaskTooltip(task) {
        let tooltip = `${task.getName()}\n\n`;
        tooltip += `Status: ${task.getStatus()}\n`;
        if (task.getProgress() > 0) {
            tooltip += `Progress: ${task.getProgress()}%\n`;
        }
        tooltip += `Started: ${task.getStartTime().toLocaleTimeString()}\n`;
        if (task.getCompletionTime()) {
            tooltip += `Completed: ${task.getCompletionTime().toLocaleTimeString()}\n`;
            tooltip += `Duration: ${this.formatDuration(task.getDuration())}\n`;
        }
        else if (task.getEstimatedCompletion()) {
            tooltip += `Estimated completion: ${task.getEstimatedCompletion().toLocaleTimeString()}\n`;
            const remainingTime = task.getRemainingTime();
            if (remainingTime !== undefined) {
                tooltip += `Remaining: ${this.formatDuration(remainingTime)}\n`;
            }
        }
        if (task.getDescription()) {
            tooltip += `\n${task.getDescription()}\n`;
        }
        const affectedFiles = task.getAffectedFiles();
        if (affectedFiles.length > 0) {
            tooltip += '\nAffected files:\n';
            affectedFiles.forEach(file => {
                tooltip += `- ${file}\n`;
            });
        }
        return tooltip;
    }
    /**
     * Format a duration in milliseconds as a human-readable string
     */
    formatDuration(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        if (seconds < 60) {
            return `${seconds}s`;
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds}s`;
    }
}
/**
 * Tree data provider for the timeline view
 */
class TimelineViewProvider {
    constructor(taskManager, settingsManager, context) {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.taskManager = taskManager;
        this.settingsManager = settingsManager;
        this.context = context;
    }
    /**
     * Refresh the tree view
     */
    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }
    /**
     * Get tree item for a given element
     */
    getTreeItem(element) {
        return element;
    }
    /**
     * Get children of a given element
     */
    getChildren(element) {
        if (!element) {
            // Root level - show all tasks in chronological order
            return Promise.resolve(this.getAllTasksChronological());
        }
        return Promise.resolve([]);
    }
    /**
     * Get all tasks in chronological order
     */
    getAllTasksChronological() {
        // Get all tasks
        const allTasks = [];
        // Get root tasks
        const rootTasks = this.taskManager.getRootTasks();
        // Add root tasks and their children recursively
        const addTasksRecursively = (tasks) => {
            tasks.forEach(task => {
                allTasks.push(task);
                // Add child tasks
                const childIds = task.getChildIds();
                const childTasks = childIds
                    .map(id => this.taskManager.getTask(id))
                    .filter((task) => task !== undefined);
                addTasksRecursively(childTasks);
            });
        };
        addTasksRecursively(rootTasks);
        // Sort tasks by start time
        allTasks.sort((a, b) => a.getStartTime().getTime() - b.getStartTime().getTime());
        // Create tree items
        return allTasks.map(task => {
            const item = new TaskTreeItem(task.getId(), task.getName(), vscode.TreeItemCollapsibleState.None);
            item.contextValue = 'task';
            item.description = `${task.getAssistantId()} - ${task.getStartTime().toLocaleTimeString()}`;
            // Set icon based on status
            switch (task.getStatus()) {
                case task_1.TaskStatus.Completed:
                    item.iconPath = new vscode.ThemeIcon('check', new vscode.ThemeColor('terminal.ansiGreen'));
                    break;
                case task_1.TaskStatus.InProgress:
                    item.iconPath = new vscode.ThemeIcon('sync', new vscode.ThemeColor('terminal.ansiBlue'));
                    break;
                case task_1.TaskStatus.Queued:
                    item.iconPath = new vscode.ThemeIcon('clock', new vscode.ThemeColor('terminal.ansiYellow'));
                    break;
                case task_1.TaskStatus.Error:
                    item.iconPath = new vscode.ThemeIcon('error', new vscode.ThemeColor('terminal.ansiRed'));
                    break;
                case task_1.TaskStatus.Analyzing:
                    item.iconPath = new vscode.ThemeIcon('beaker', new vscode.ThemeColor('terminal.ansiMagenta'));
                    break;
            }
            return item;
        });
    }
}
/**
 * Tree item for tasks
 */
class TaskTreeItem extends vscode.TreeItem {
    constructor(id, label, collapsibleState) {
        super(label, collapsibleState);
        this.id = id;
        this.label = label;
        this.collapsibleState = collapsibleState;
    }
}
//# sourceMappingURL=visualizationEngine.js.map