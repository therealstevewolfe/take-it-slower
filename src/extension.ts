import * as vscode from 'vscode';
import { AISummarizer } from './extension/aiSummarizer';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log('AI Summarizer extension is now active');
  
  // Create and initialize the main extension class
  const aiSummarizer = new AISummarizer(context);
  
  // Add to subscriptions to ensure proper disposal
  context.subscriptions.push(aiSummarizer);
  
  // Show initial activation message
  vscode.window.showInformationMessage('AI Summarizer activated. Monitoring AI assistant activities.');
}

// This method is called when the extension is deactivated
export function deactivate() {
  console.log('AI Summarizer extension is now deactivated');
}
