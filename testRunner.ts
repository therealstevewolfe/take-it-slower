import * as vscode from 'vscode';
import { TestUtility } from './utils/testUtility';
import { TaskManager } from './taskManager/taskManager';
import { SettingsManager } from './utils/settingsManager';

/**
 * Test runner for the VS Code AI Summarizer extension
 */
export class TestRunner {
  private taskManager: TaskManager;
  private testUtility: TestUtility;
  private settingsManager: SettingsManager;
  
  constructor() {
    this.taskManager = new TaskManager();
    this.testUtility = new TestUtility(this.taskManager);
    this.settingsManager = new SettingsManager();
  }
  
  /**
   * Run comprehensive tests for the extension
   */
  public async runTests(): Promise<void> {
    // Clear any existing tasks
    this.taskManager.clearTasks();
    
    // Show notification
    vscode.window.showInformationMessage('Starting AI Summarizer extension tests...');
    
    // Test with Roo Code assistant
    await this.testAssistant('rooCode');
    
    // Wait a bit before testing with another assistant
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Test with Cline assistant
    await this.testAssistant('cline');
    
    // Generate and show test report
    const report = this.testUtility.generateTestReport();
    
    // Write report to file
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (workspaceFolders) {
      const reportPath = vscode.Uri.joinPath(workspaceFolders[0].uri, 'test-report.md');
      await vscode.workspace.fs.writeFile(reportPath, Buffer.from(report));
      
      // Open the report
      vscode.commands.executeCommand('vscode.open', reportPath);
    }
    
    // Show completion notification
    vscode.window.showInformationMessage('AI Summarizer extension tests completed successfully.');
  }
  
  /**
   * Test with a specific assistant
   */
  private async testAssistant(assistantType: 'rooCode' | 'cline'): Promise<void> {
    vscode.window.showInformationMessage(`Testing with ${assistantType} assistant...`);
    
    // Run test with sample outputs
    await this.testUtility.runTest(assistantType);
    
    vscode.window.showInformationMessage(`${assistantType} assistant test completed.`);
  }
}
