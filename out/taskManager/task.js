"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.TaskType = exports.TaskStatus = void 0;
/**
 * Task class representing an AI assistant task
 */
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Queued"] = "queued";
    TaskStatus["InProgress"] = "in-progress";
    TaskStatus["Completed"] = "completed";
    TaskStatus["Error"] = "error";
    TaskStatus["Analyzing"] = "analyzing";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var TaskType;
(function (TaskType) {
    TaskType["Generic"] = "generic";
    TaskType["FileOperation"] = "file-operation";
    TaskType["CodeGeneration"] = "code-generation";
    TaskType["Analysis"] = "analysis";
    TaskType["Configuration"] = "configuration";
    TaskType["Testing"] = "testing";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
class Task {
    constructor(id, name, assistantId, type = TaskType.Generic) {
        this.status = TaskStatus.Queued;
        this.progress = 0;
        this.description = '';
        this.childIds = [];
        this.affectedFiles = [];
        this.id = id;
        this.name = name;
        this.assistantId = assistantId;
        this.type = type;
        this.startTime = new Date();
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAssistantId() {
        return this.assistantId;
    }
    getType() {
        return this.type;
    }
    getStatus() {
        return this.status;
    }
    getProgress() {
        return this.progress;
    }
    getDescription() {
        return this.description;
    }
    getStartTime() {
        return this.startTime;
    }
    getCompletionTime() {
        return this.completionTime;
    }
    getEstimatedCompletion() {
        return this.estimatedCompletion;
    }
    getParentId() {
        return this.parentId;
    }
    getChildIds() {
        return [...this.childIds];
    }
    getAffectedFiles() {
        return [...this.affectedFiles];
    }
    setStatus(status) {
        this.status = status;
        if (status === TaskStatus.Completed) {
            this.completionTime = new Date();
            this.progress = 100;
        }
    }
    setProgress(progress) {
        this.progress = Math.max(0, Math.min(100, progress));
    }
    setDescription(description) {
        this.description = description;
    }
    setEstimatedCompletion(estimatedCompletion) {
        this.estimatedCompletion = estimatedCompletion;
    }
    setParent(parentId) {
        this.parentId = parentId;
    }
    addChild(childId) {
        if (!this.childIds.includes(childId)) {
            this.childIds.push(childId);
        }
    }
    removeChild(childId) {
        const index = this.childIds.indexOf(childId);
        if (index !== -1) {
            this.childIds.splice(index, 1);
        }
    }
    setAffectedFiles(files) {
        this.affectedFiles = [...files];
    }
    addAffectedFile(file) {
        if (!this.affectedFiles.includes(file)) {
            this.affectedFiles.push(file);
        }
    }
    getDuration() {
        const end = this.completionTime || new Date();
        return end.getTime() - this.startTime.getTime();
    }
    getRemainingTime() {
        if (!this.estimatedCompletion) {
            return undefined;
        }
        return Math.max(0, this.estimatedCompletion.getTime() - new Date().getTime());
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map