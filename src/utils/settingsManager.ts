import * as vscode from 'vscode';

/**
 * Manages extension settings
 */
export class SettingsManager {
  constructor() {}
  
  /**
   * Get whether the extension is enabled
   */
  public getEnabled(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.general').get('enabled', true);
  }
  
  /**
   * Get the refresh rate for UI updates
   */
  public getRefreshRate(): number {
    return vscode.workspace.getConfiguration('aiSummarizer.general').get('refreshRate', 200);
  }
  
  /**
   * Get the maximum number of visible tasks
   */
  public getMaxVisibleTasks(): number {
    return vscode.workspace.getConfiguration('aiSummarizer.general').get('maxVisibleTasks', 50);
  }
  
  /**
   * Get the default view mode
   */
  public getDefaultView(): string {
    return vscode.workspace.getConfiguration('aiSummarizer.general').get('defaultView', 'hierarchical');
  }
  
  /**
   * Get whether notifications are enabled
   */
  public getNotificationsEnabled(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('enabled', true);
  }
  
  /**
   * Get whether to show task start notifications
   */
  public getShowTaskStartNotifications(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('showTaskStart', true);
  }
  
  /**
   * Get whether to show task completion notifications
   */
  public getShowTaskCompletionNotifications(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('showTaskCompletion', true);
  }
  
  /**
   * Get whether to show error notifications
   */
  public getShowErrorNotifications(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('showErrors', true);
  }
  
  /**
   * Get the maximum number of notifications per minute
   */
  public getMaxNotificationsPerMinute(): number {
    return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('maxNotificationsPerMinute', 5);
  }
  
  /**
   * Get the color theme
   */
  public getColorTheme(): string {
    return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('colorTheme', 'default');
  }
  
  /**
   * Get whether animations are enabled
   */
  public getAnimationsEnabled(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('animationsEnabled', true);
  }
  
  /**
   * Get whether to show the status bar indicator
   */
  public getShowStatusBarIndicator(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('showStatusBarIndicator', true);
  }
  
  /**
   * Get whether to use compact mode
   */
  public getCompactMode(): boolean {
    return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('compactMode', false);
  }
  
  /**
   * Get all configured AI assistants
   */
  public getConfiguredAssistants(): Array<{id: string; enabled: boolean; outputChannel: string}> {
    const assistants = [];
    
    // Add Roo Code assistant if enabled
    if (vscode.workspace.getConfiguration('aiSummarizer.assistants.rooCode').get('enabled', true)) {
      assistants.push({
        id: 'rooCode',
        enabled: true,
        outputChannel: vscode.workspace.getConfiguration('aiSummarizer.assistants.rooCode').get('outputChannel', 'Roo Code')
      });
    }
    
    // Add Cline assistant if enabled
    if (vscode.workspace.getConfiguration('aiSummarizer.assistants.cline').get('enabled', true)) {
      assistants.push({
        id: 'cline',
        enabled: true,
        outputChannel: vscode.workspace.getConfiguration('aiSummarizer.assistants.cline').get('outputChannel', 'Cline')
      });
    }
    
    // Add custom assistants
    const customAssistants = vscode.workspace.getConfiguration('aiSummarizer.assistants').get('custom', []);
    assistants.push(...customAssistants);
    
    return assistants;
  }
}
