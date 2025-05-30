import * as vscode from 'vscode';
import { TaskManager } from '../taskManager/taskManager';
import { OutputParser } from '../parsers/outputParser';
import { VisualizationEngine } from '../visualization/visualizationEngine';
import { SettingsManager } from '../utils/settingsManager';

/**
 * Main extension class that coordinates all components
 */
export class AISummarizer {
  private taskManager: TaskManager;
  private outputParser: OutputParser;
  private visualizationEngine: VisualizationEngine;
  private settingsManager: SettingsManager;
  private statusBarItem: vscode.StatusBarItem;
  private disposables: vscode.Disposable[] = [];

  constructor(context: vscode.ExtensionContext) {
    this.settingsManager = new SettingsManager();
    this.taskManager = new TaskManager();
    this.outputParser = new OutputParser(this.taskManager, this.settingsManager);
    this.visualizationEngine = new VisualizationEngine(this.taskManager, this.settingsManager, context);
    
    // Create status bar item
    this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    this.statusBarItem.command = 'aiSummarizer.togglePanel';
    this.statusBarItem.text = '$(sync) AI: Initializing...';
    this.statusBarItem.tooltip = 'AI Summarizer: Click to toggle activity panel';
    this.statusBarItem.show();
    
    this.initialize(context);
  }

  private initialize(context: vscode.ExtensionContext): void {
    // Register commands
    this.registerCommands(context);
    
    // Start monitoring output channels
    this.startMonitoring();
    
    // Update status bar initially
    this.updateStatusBar();
    
    // Set up regular status updates
    setInterval(() => this.updateStatusBar(), 1000);
  }

  private registerCommands(context: vscode.ExtensionContext): void {
    // Register all commands defined in package.json
    this.disposables.push(
      vscode.commands.registerCommand('aiSummarizer.togglePanel', () => {
        this.visualizationEngine.togglePanel();
      }),
      
      vscode.commands.registerCommand('aiSummarizer.focusCurrentTask', () => {
        this.visualizationEngine.focusCurrentTask();
      }),
      
      vscode.commands.registerCommand('aiSummarizer.collapseAll', () => {
        this.visualizationEngine.collapseAll();
      }),
      
      vscode.commands.registerCommand('aiSummarizer.expandAll', () => {
        this.visualizationEngine.expandAll();
      })
    );
    
    // Add all disposables to context
    this.disposables.forEach(d => context.subscriptions.push(d));
  }

  private startMonitoring(): void {
    // Start monitoring output channels and terminals
    this.outputParser.startMonitoring();
  }

  private updateStatusBar(): void {
    const stats = this.taskManager.getTaskStats();
    
    if (stats.active === 0 && stats.completed === 0 && stats.queued === 0) {
      this.statusBarItem.text = '$(sync) AI: Idle';
    } else if (stats.active > 0) {
      this.statusBarItem.text = `$(sync~spin) AI: ${stats.active} active, ${stats.completed} done`;
    } else {
      this.statusBarItem.text = `$(check) AI: ${stats.completed} done`;
    }
  }

  public dispose(): void {
    this.statusBarItem.dispose();
    this.outputParser.dispose();
    this.visualizationEngine.dispose();
    this.disposables.forEach(d => d.dispose());
  }
}
