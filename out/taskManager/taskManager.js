"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const task_1 = require("./task");
/**
 * Manages the collection of tasks and their relationships
 */
class TaskManager {
    constructor() {
        this.tasks = new Map();
        this.activeTaskIds = new Set();
        this.rootTaskIds = new Set();
        this.taskListeners = [];
    }
    /**
     * Creates a new task
     */
    createTask(id, name, assistantId, type = task_1.TaskType.Generic, parentId) {
        const task = new task_1.Task(id, name, assistantId, type);
        this.tasks.set(id, task);
        // If this task has a parent, add it as a child to the parent
        if (parentId && this.tasks.has(parentId)) {
            const parent = this.tasks.get(parentId);
            parent.addChild(id);
            task.setParent(parentId);
        }
        else {
            // If no parent, this is a root task
            this.rootTaskIds.add(id);
        }
        // Notify listeners of new task
        this.notifyTaskChanged(task);
        return task;
    }
    /**
     * Updates an existing task's status
     */
    updateTaskStatus(id, status, progress) {
        if (!this.tasks.has(id)) {
            return false;
        }
        const task = this.tasks.get(id);
        // Update task status
        task.setStatus(status);
        // Update progress if provided
        if (progress !== undefined) {
            task.setProgress(progress);
        }
        // Update active tasks set
        if (status === task_1.TaskStatus.InProgress) {
            this.activeTaskIds.add(id);
        }
        else {
            this.activeTaskIds.delete(id);
        }
        // Notify listeners of task update
        this.notifyTaskChanged(task);
        return true;
    }
    /**
     * Updates task details
     */
    updateTaskDetails(id, details) {
        if (!this.tasks.has(id)) {
            return false;
        }
        const task = this.tasks.get(id);
        if (details.description) {
            task.setDescription(details.description);
        }
        if (details.estimatedCompletion) {
            task.setEstimatedCompletion(details.estimatedCompletion);
        }
        if (details.affectedFiles) {
            task.setAffectedFiles(details.affectedFiles);
        }
        // Notify listeners of task update
        this.notifyTaskChanged(task);
        return true;
    }
    /**
     * Gets a task by ID
     */
    getTask(id) {
        return this.tasks.get(id);
    }
    /**
     * Gets all root tasks
     */
    getRootTasks() {
        return Array.from(this.rootTaskIds).map(id => this.tasks.get(id));
    }
    /**
     * Gets all tasks for a specific assistant
     */
    getTasksByAssistant(assistantId) {
        return Array.from(this.tasks.values())
            .filter(task => task.getAssistantId() === assistantId);
    }
    /**
     * Gets all active tasks
     */
    getActiveTasks() {
        return Array.from(this.activeTaskIds)
            .map(id => this.tasks.get(id))
            .filter(task => task !== undefined);
    }
    /**
     * Gets statistics about tasks
     */
    getTaskStats() {
        let active = 0;
        let completed = 0;
        let queued = 0;
        let error = 0;
        this.tasks.forEach(task => {
            switch (task.getStatus()) {
                case task_1.TaskStatus.InProgress:
                    active++;
                    break;
                case task_1.TaskStatus.Completed:
                    completed++;
                    break;
                case task_1.TaskStatus.Queued:
                    queued++;
                    break;
                case task_1.TaskStatus.Error:
                    error++;
                    break;
            }
        });
        return { active, completed, queued, error };
    }
    /**
     * Adds a listener for task changes
     */
    addTaskListener(listener) {
        this.taskListeners.push(listener);
    }
    /**
     * Removes a task listener
     */
    removeTaskListener(listener) {
        const index = this.taskListeners.indexOf(listener);
        if (index !== -1) {
            this.taskListeners.splice(index, 1);
        }
    }
    /**
     * Notifies all listeners of a task change
     */
    notifyTaskChanged(task) {
        this.taskListeners.forEach(listener => {
            try {
                listener(task);
            }
            catch (e) {
                console.error('Error in task listener:', e);
            }
        });
    }
    /**
     * Clears all tasks
     */
    clearTasks() {
        this.tasks.clear();
        this.activeTaskIds.clear();
        this.rootTaskIds.clear();
    }
}
exports.TaskManager = TaskManager;
//# sourceMappingURL=taskManager.js.map