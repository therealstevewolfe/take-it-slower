/**
 * Task class representing an AI assistant task
 */
export enum TaskStatus {
  Queued = 'queued',
  InProgress = 'in-progress',
  Completed = 'completed',
  Error = 'error',
  Analyzing = 'analyzing'
}

export enum TaskType {
  Generic = 'generic',
  FileOperation = 'file-operation',
  CodeGeneration = 'code-generation',
  Analysis = 'analysis',
  Configuration = 'configuration',
  Testing = 'testing'
}

export class Task {
  private id: string;
  private name: string;
  private assistantId: string;
  private type: TaskType;
  private status: TaskStatus = TaskStatus.Queued;
  private progress: number = 0;
  private description: string = '';
  private startTime: Date;
  private completionTime?: Date;
  private estimatedCompletion?: Date;
  private parentId?: string;
  private childIds: string[] = [];
  private affectedFiles: string[] = [];
  
  constructor(id: string, name: string, assistantId: string, type: TaskType = TaskType.Generic) {
    this.id = id;
    this.name = name;
    this.assistantId = assistantId;
    this.type = type;
    this.startTime = new Date();
  }
  
  public getId(): string {
    return this.id;
  }
  
  public getName(): string {
    return this.name;
  }
  
  public getAssistantId(): string {
    return this.assistantId;
  }
  
  public getType(): TaskType {
    return this.type;
  }
  
  public getStatus(): TaskStatus {
    return this.status;
  }
  
  public getProgress(): number {
    return this.progress;
  }
  
  public getDescription(): string {
    return this.description;
  }
  
  public getStartTime(): Date {
    return this.startTime;
  }
  
  public getCompletionTime(): Date | undefined {
    return this.completionTime;
  }
  
  public getEstimatedCompletion(): Date | undefined {
    return this.estimatedCompletion;
  }
  
  public getParentId(): string | undefined {
    return this.parentId;
  }
  
  public getChildIds(): string[] {
    return [...this.childIds];
  }
  
  public getAffectedFiles(): string[] {
    return [...this.affectedFiles];
  }
  
  public setStatus(status: TaskStatus): void {
    this.status = status;
    
    if (status === TaskStatus.Completed) {
      this.completionTime = new Date();
      this.progress = 100;
    }
  }
  
  public setProgress(progress: number): void {
    this.progress = Math.max(0, Math.min(100, progress));
  }
  
  public setDescription(description: string): void {
    this.description = description;
  }
  
  public setEstimatedCompletion(estimatedCompletion: Date): void {
    this.estimatedCompletion = estimatedCompletion;
  }
  
  public setParent(parentId: string): void {
    this.parentId = parentId;
  }
  
  public addChild(childId: string): void {
    if (!this.childIds.includes(childId)) {
      this.childIds.push(childId);
    }
  }
  
  public removeChild(childId: string): void {
    const index = this.childIds.indexOf(childId);
    if (index !== -1) {
      this.childIds.splice(index, 1);
    }
  }
  
  public setAffectedFiles(files: string[]): void {
    this.affectedFiles = [...files];
  }
  
  public addAffectedFile(file: string): void {
    if (!this.affectedFiles.includes(file)) {
      this.affectedFiles.push(file);
    }
  }
  
  public getDuration(): number {
    const end = this.completionTime || new Date();
    return end.getTime() - this.startTime.getTime();
  }
  
  public getRemainingTime(): number | undefined {
    if (!this.estimatedCompletion) {
      return undefined;
    }
    
    return Math.max(0, this.estimatedCompletion.getTime() - new Date().getTime());
  }
}
