import * as vscode from 'vscode';
import { Task, TaskStatus, TaskType } from './task';

/**
 * Manages the collection of tasks and their relationships
 */
export class TaskManager {
  private tasks: Map<string, Task> = new Map();
  private activeTaskIds: Set<string> = new Set();
  private rootTaskIds: Set<string> = new Set();
  private taskListeners: Array<(task: Task) => void> = [];
  
  constructor() {}
  
  /**
   * Creates a new task
   */
  public createTask(
    id: string,
    name: string,
    assistantId: string,
    type: TaskType = TaskType.Generic,
    parentId?: string
  ): Task {
    const task = new Task(id, name, assistantId, type);
    
    this.tasks.set(id, task);
    
    // If this task has a parent, add it as a child to the parent
    if (parentId && this.tasks.has(parentId)) {
      const parent = this.tasks.get(parentId)!;
      parent.addChild(id);
      task.setParent(parentId);
    } else {
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
  public updateTaskStatus(id: string, status: TaskStatus, progress?: number): boolean {
    if (!this.tasks.has(id)) {
      return false;
    }
    
    const task = this.tasks.get(id)!;
    
    // Update task status
    task.setStatus(status);
    
    // Update progress if provided
    if (progress !== undefined) {
      task.setProgress(progress);
    }
    
    // Update active tasks set
    if (status === TaskStatus.InProgress) {
      this.activeTaskIds.add(id);
    } else {
      this.activeTaskIds.delete(id);
    }
    
    // Notify listeners of task update
    this.notifyTaskChanged(task);
    
    return true;
  }
  
  /**
   * Updates task details
   */
  public updateTaskDetails(
    id: string, 
    details: {
      description?: string;
      estimatedCompletion?: Date;
      affectedFiles?: string[];
    }
  ): boolean {
    if (!this.tasks.has(id)) {
      return false;
    }
    
    const task = this.tasks.get(id)!;
    
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
  public getTask(id: string): Task | undefined {
    return this.tasks.get(id);
  }
  
  /**
   * Gets all root tasks
   */
  public getRootTasks(): Task[] {
    return Array.from(this.rootTaskIds).map(id => this.tasks.get(id)!);
  }
  
  /**
   * Gets all tasks for a specific assistant
   */
  public getTasksByAssistant(assistantId: string): Task[] {
    return Array.from(this.tasks.values())
      .filter(task => task.getAssistantId() === assistantId);
  }
  
  /**
   * Gets all active tasks
   */
  public getActiveTasks(): Task[] {
    return Array.from(this.activeTaskIds)
      .map(id => this.tasks.get(id)!)
      .filter(task => task !== undefined);
  }
  
  /**
   * Gets statistics about tasks
   */
  public getTaskStats(): { active: number; completed: number; queued: number; error: number } {
    let active = 0;
    let completed = 0;
    let queued = 0;
    let error = 0;
    
    this.tasks.forEach(task => {
      switch (task.getStatus()) {
        case TaskStatus.InProgress:
          active++;
          break;
        case TaskStatus.Completed:
          completed++;
          break;
        case TaskStatus.Queued:
          queued++;
          break;
        case TaskStatus.Error:
          error++;
          break;
      }
    });
    
    return { active, completed, queued, error };
  }
  
  /**
   * Adds a listener for task changes
   */
  public addTaskListener(listener: (task: Task) => void): void {
    this.taskListeners.push(listener);
  }
  
  /**
   * Removes a task listener
   */
  public removeTaskListener(listener: (task: Task) => void): void {
    const index = this.taskListeners.indexOf(listener);
    if (index !== -1) {
      this.taskListeners.splice(index, 1);
    }
  }
  
  /**
   * Notifies all listeners of a task change
   */
  private notifyTaskChanged(task: Task): void {
    this.taskListeners.forEach(listener => {
      try {
        listener(task);
      } catch (e) {
        console.error('Error in task listener:', e);
      }
    });
  }
  
  /**
   * Clears all tasks
   */
  public clearTasks(): void {
    this.tasks.clear();
    this.activeTaskIds.clear();
    this.rootTaskIds.clear();
  }
}
