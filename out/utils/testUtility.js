"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUtility = void 0;
const aiAssistantOutputAnalyzer_1 = require("../parsers/aiAssistantOutputAnalyzer");
const task_1 = require("../taskManager/task");
/**
 * Test utility for simulating AI assistant outputs and testing the extension
 */
class TestUtility {
    constructor(taskManager) {
        this.taskManager = taskManager;
        this.outputAnalyzer = new aiAssistantOutputAnalyzer_1.AIAssistantOutputAnalyzer();
    }
    /**
     * Run a test with sample AI assistant outputs
     */
    async runTest(assistantType) {
        // Load sample outputs
        const sampleOutputs = await this.loadSampleOutputs(assistantType);
        // Process each output with a delay to simulate real-time
        for (const output of sampleOutputs) {
            // Analyze output
            const taskInfos = this.outputAnalyzer.analyzeOutput(output, assistantType);
            // Process task infos
            this.processTaskInfos(taskInfos, assistantType);
            // Wait a bit to simulate real-time updates
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    /**
     * Process task infos and update task manager
     */
    processTaskInfos(taskInfos, assistantId) {
        for (const taskInfo of taskInfos) {
            if (!taskInfo.id) {
                // This is just additional info for an existing task
                // In a real implementation, we would need to determine which task to update
                continue;
            }
            // Check if task exists
            let task = this.taskManager.getTask(taskInfo.id);
            if (!task) {
                // Create new task
                task = this.taskManager.createTask(taskInfo.id, taskInfo.name, assistantId, taskInfo.type || task_1.TaskType.Generic, taskInfo.parentId);
            }
            // Update task status if provided
            if (taskInfo.status) {
                this.taskManager.updateTaskStatus(taskInfo.id, taskInfo.status, taskInfo.progress);
            }
            // Update task details if provided
            if (taskInfo.details) {
                this.taskManager.updateTaskDetails(taskInfo.id, taskInfo.details);
            }
        }
    }
    /**
     * Load sample outputs from files
     */
    async loadSampleOutputs(assistantType) {
        // In a real implementation, we would load sample outputs from files
        // For now, we'll return hardcoded samples
        if (assistantType === 'rooCode') {
            return [
                "I'll help you implement the authentication system for your application.",
                "Starting project initialization...",
                "Creating directory structure for the authentication module.",
                "Setting up package.json with required dependencies.",
                "Installing dependencies: jsonwebtoken, bcrypt, passport...",
                "Dependencies installed successfully.",
                "Project initialization completed.",
                "Now implementing authentication middleware...",
                "Creating auth.js middleware file.",
                "Implementing JWT validation logic.",
                "Progress: 50% complete on authentication middleware.",
                "Adding user verification functions.",
                "Progress: 75% complete on authentication middleware.",
                "Authentication middleware implementation completed.",
                "Now setting up user model...",
                "Creating user schema with email, password, and role fields.",
                "Adding password hashing pre-save hooks.",
                "User model implementation completed.",
                "Now implementing authentication routes...",
                "Creating login route with JWT token generation.",
                "Creating registration route with validation.",
                "Creating password reset functionality.",
                "Authentication routes implementation completed.",
                "Testing authentication flow...",
                "Fixed issue with token expiration validation.",
                "All authentication tests passing.",
                "Authentication system implementation completed successfully."
            ];
        }
        else if (assistantType === 'cline') {
            return [
                "I'll analyze your codebase and suggest optimizations for the data processing pipeline.",
                "Starting code analysis...",
                "Examining file structure and dependencies.",
                "Analyzing performance bottlenecks in data processing functions.",
                "Found potential issue: inefficient data loading in dataLoader.js",
                "Progress: 30% complete on code analysis.",
                "Analyzing memory usage patterns.",
                "Identified memory leak in connection pooling.",
                "Progress: 60% complete on code analysis.",
                "Examining error handling and resilience patterns.",
                "Code analysis completed.",
                "Starting optimization implementation...",
                "Refactoring data loading function to use streaming approach.",
                "Progress: 25% complete on optimization implementation.",
                "Implementing connection pool management improvements.",
                "Progress: 50% complete on optimization implementation.",
                "Adding proper error handling and retry logic.",
                "Progress: 75% complete on optimization implementation.",
                "Implementing caching layer for frequently accessed data.",
                "Optimization implementation completed.",
                "Running performance tests...",
                "Initial results: 40% reduction in processing time.",
                "Further optimizing batch processing logic.",
                "Final performance test results: 65% reduction in processing time, 50% reduction in memory usage.",
                "All optimizations have been successfully implemented and tested."
            ];
        }
        return [];
    }
    /**
     * Generate a test report
     */
    generateTestReport() {
        const stats = this.taskManager.getTaskStats();
        let report = "# AI Summarizer Extension Test Report\n\n";
        report += `## Task Statistics\n\n`;
        report += `- Active Tasks: ${stats.active}\n`;
        report += `- Completed Tasks: ${stats.completed}\n`;
        report += `- Queued Tasks: ${stats.queued}\n`;
        report += `- Error Tasks: ${stats.error}\n\n`;
        report += `## Task Hierarchy\n\n`;
        // Add root tasks and their children
        const rootTasks = this.taskManager.getRootTasks();
        rootTasks.forEach(task => {
            report += this.formatTaskHierarchy(task, 0);
        });
        return report;
    }
    /**
     * Format task hierarchy for the report
     */
    formatTaskHierarchy(task, level) {
        const indent = '  '.repeat(level);
        let result = `${indent}- ${task.getName()} (${task.getStatus()}`;
        if (task.getProgress() > 0 && task.getStatus() === task_1.TaskStatus.InProgress) {
            result += `, ${task.getProgress()}%`;
        }
        result += `)\n`;
        // Add child tasks
        const childIds = task.getChildIds();
        childIds.forEach(childId => {
            const childTask = this.taskManager.getTask(childId);
            if (childTask) {
                result += this.formatTaskHierarchy(childTask, level + 1);
            }
        });
        return result;
    }
}
exports.TestUtility = TestUtility;
//# sourceMappingURL=testUtility.js.map