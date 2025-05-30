"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAssistantOutputAnalyzer = void 0;
const task_1 = require("../taskManager/task");
/**
 * Analyzes AI assistant output to extract task information
 */
class AIAssistantOutputAnalyzer {
    constructor() {
        // Regular expressions for pattern matching
        this.taskStartPatterns = [
            /(?:Starting|Beginning|Initiating|Working on|Creating|Implementing|Setting up) (.*?)(?:\.|\.\.\.|…|$)/i,
            /I will now (.*?)(?:\.|\.\.\.|…|$)/i,
            /Task: (.*?)(?:\.|\.\.\.|…|$)/i,
            /Step \d+: (.*?)(?:\.|\.\.\.|…|$)/i
        ];
        this.taskProgressPatterns = [
            /(?:Progress|Status): (.*?)(?:\.|\.\.\.|…|$)/i,
            /(\d+)% complete/i,
            /(?:Continuing|Progressing with|Working on) (.*?)(?:\.|\.\.\.|…|$)/i
        ];
        this.taskCompletionPatterns = [
            /(?:Completed|Finished|Done|Success): (.*?)(?:\.|\.\.\.|…|$)/i,
            /Successfully (.*?)(?:\.|\.\.\.|…|$)/i,
            /Task completed: (.*?)(?:\.|\.\.\.|…|$)/i
        ];
        this.taskErrorPatterns = [
            /(?:Error|Failed|Issue|Problem): (.*?)(?:\.|\.\.\.|…|$)/i,
            /(?:Unable to|Cannot|Could not) (.*?)(?:\.|\.\.\.|…|$)/i,
            /Error occurred while (.*?)(?:\.|\.\.\.|…|$)/i
        ];
        this.filePatterns = [
            /(?:Creating|Modifying|Updating|Reading|Writing) (?:file|files): (.*?)(?:\.|\.\.\.|…|$)/i,
            /(?:File|Files) affected: (.*?)(?:\.|\.\.\.|…|$)/i,
            /(?:in|to|from) file[s]? `(.*?)`/i,
            /(?:in|to|from) `(.*?\.(?:js|ts|py|html|css|json|md|txt))`/i
        ];
        // Task type detection patterns
        this.taskTypePatterns = new Map([
            [task_1.TaskType.FileOperation, [
                    /(?:Creating|Modifying|Updating|Reading|Writing) (?:file|files)/i,
                    /(?:File|Files) (?:operation|creation|modification|update)/i
                ]],
            [task_1.TaskType.CodeGeneration, [
                    /(?:Generating|Creating|Writing) (?:code|function|class|method|component)/i,
                    /(?:Implementing|Coding) (?:feature|functionality)/i
                ]],
            [task_1.TaskType.Analysis, [
                    /(?:Analyzing|Examining|Reviewing|Inspecting)/i,
                    /(?:Analysis|Review) of/i
                ]],
            [task_1.TaskType.Configuration, [
                    /(?:Configuring|Setting up|Initializing|Installing)/i,
                    /(?:Configuration|Setup|Initialization)/i
                ]],
            [task_1.TaskType.Testing, [
                    /(?:Testing|Validating|Verifying|Checking)/i,
                    /(?:Test|Validation|Verification)/i
                ]]
        ]);
        // Cache of previously seen content to avoid reprocessing
        this.processedContent = new Set();
        // Task ID generation
        this.taskCounter = 0;
    }
    /**
     * Analyzes output content to extract task information
     */
    analyzeOutput(content, assistantId) {
        // Skip if we've already processed this exact content
        if (this.processedContent.has(content)) {
            return [];
        }
        // Add to processed content
        this.processedContent.add(content);
        // Split content into lines for analysis
        const lines = content.split('\n');
        // Extract task information from lines
        const taskInfos = [];
        // Process each line
        for (const line of lines) {
            // Skip empty lines
            if (!line.trim()) {
                continue;
            }
            // Try to extract task information
            const taskInfo = this.extractTaskInfo(line, assistantId);
            if (taskInfo) {
                taskInfos.push(taskInfo);
            }
        }
        return taskInfos;
    }
    /**
     * Extract task information from a single line
     */
    extractTaskInfo(line, assistantId) {
        // Check for task start
        for (const pattern of this.taskStartPatterns) {
            const match = line.match(pattern);
            if (match && match[1]) {
                const taskName = match[1].trim();
                const taskType = this.determineTaskType(line);
                const taskId = this.generateTaskId(taskName, assistantId);
                return {
                    id: taskId,
                    name: taskName,
                    type: taskType,
                    status: task_1.TaskStatus.InProgress,
                    progress: 0,
                    details: {
                        description: line
                    }
                };
            }
        }
        // Check for task progress
        for (const pattern of this.taskProgressPatterns) {
            const match = line.match(pattern);
            if (match) {
                // Extract progress percentage if available
                const progressMatch = line.match(/(\d+)%/);
                const progress = progressMatch ? parseInt(progressMatch[1], 10) : undefined;
                // Extract task name if available
                const taskName = match[1] ? match[1].trim() : undefined;
                // If we have a task name, we can create a new task or update an existing one
                if (taskName) {
                    const taskType = this.determineTaskType(line);
                    const taskId = this.generateTaskId(taskName, assistantId);
                    return {
                        id: taskId,
                        name: taskName,
                        type: taskType,
                        status: task_1.TaskStatus.InProgress,
                        progress: progress,
                        details: {
                            description: line
                        }
                    };
                }
                else {
                    // If we don't have a task name, we can only return progress information
                    // The caller will need to determine which task to update
                    return {
                        id: '',
                        name: '',
                        status: task_1.TaskStatus.InProgress,
                        progress: progress,
                        details: {
                            description: line
                        }
                    };
                }
            }
        }
        // Check for task completion
        for (const pattern of this.taskCompletionPatterns) {
            const match = line.match(pattern);
            if (match && match[1]) {
                const taskName = match[1].trim();
                const taskType = this.determineTaskType(line);
                const taskId = this.generateTaskId(taskName, assistantId);
                return {
                    id: taskId,
                    name: taskName,
                    type: taskType,
                    status: task_1.TaskStatus.Completed,
                    progress: 100,
                    details: {
                        description: line
                    }
                };
            }
        }
        // Check for task error
        for (const pattern of this.taskErrorPatterns) {
            const match = line.match(pattern);
            if (match && match[1]) {
                const taskName = match[1].trim();
                const taskType = this.determineTaskType(line);
                const taskId = this.generateTaskId(taskName, assistantId);
                return {
                    id: taskId,
                    name: taskName,
                    type: taskType,
                    status: task_1.TaskStatus.Error,
                    details: {
                        description: line
                    }
                };
            }
        }
        // Check for file operations
        for (const pattern of this.filePatterns) {
            const match = line.match(pattern);
            if (match && match[1]) {
                const files = match[1].split(',').map(file => file.trim());
                // This is just file information, not a complete task
                // Return minimal info that can be used to update an existing task
                return {
                    id: '',
                    name: '',
                    details: {
                        affectedFiles: files,
                        description: line
                    }
                };
            }
        }
        // No task information found
        return null;
    }
    /**
     * Determine the task type based on content
     */
    determineTaskType(content) {
        for (const [type, patterns] of this.taskTypePatterns.entries()) {
            for (const pattern of patterns) {
                if (pattern.test(content)) {
                    return type;
                }
            }
        }
        return task_1.TaskType.Generic;
    }
    /**
     * Generate a unique task ID
     */
    generateTaskId(taskName, assistantId) {
        // Create a simplified version of the task name for the ID
        const simplifiedName = taskName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_+|_+$/g, '')
            .substring(0, 30);
        // Combine with assistant ID and counter for uniqueness
        const id = `${assistantId}_${simplifiedName}_${++this.taskCounter}`;
        return id;
    }
    /**
     * Reset the analyzer state
     */
    reset() {
        this.processedContent.clear();
        this.taskCounter = 0;
    }
}
exports.AIAssistantOutputAnalyzer = AIAssistantOutputAnalyzer;
//# sourceMappingURL=aiAssistantOutputAnalyzer.js.map