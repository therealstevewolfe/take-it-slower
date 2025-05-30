import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { TestRunner } from '../testRunner';

/**
 * Test script to validate the VS Code AI Summarizer extension
 * This script can be run directly to test the extension functionality
 * without having to deploy it to VS Code
 */

// Create test directory if it doesn't exist
const testDir = path.join(__dirname, '../test-results');
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir);
}

// Log file path
const logFile = path.join(testDir, 'test-log.txt');

/**
 * Log message to file
 */
function log(message: string): void {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, logMessage);
  console.log(message);
}

/**
 * Main test function
 */
async function runTests(): Promise<void> {
  log('Starting VS Code AI Summarizer extension tests');
  
  try {
    // Initialize test runner
    const testRunner = new TestRunner();
    
    // Run tests
    log('Running comprehensive tests...');
    await testRunner.runTests();
    
    // Test completed successfully
    log('All tests completed successfully');
    
    // Output success message
    console.log('\n✅ VS Code AI Summarizer extension tests passed!\n');
    
  } catch (error) {
    // Log error
    log(`Error during testing: ${error}`);
    console.error('❌ Test failed:', error);
  }
}

// Run tests
runTests().catch(error => {
  log(`Unhandled error: ${error}`);
  console.error('Unhandled error:', error);
});
