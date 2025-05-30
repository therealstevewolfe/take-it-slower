"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const testRunner_1 = require("./testRunner");
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
function log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
    console.log(message);
}
/**
 * Main test function
 */
async function runTests() {
    log('Starting VS Code AI Summarizer extension tests');
    try {
        // Initialize test runner
        const testRunner = new testRunner_1.TestRunner();
        // Run tests
        log('Running comprehensive tests...');
        await testRunner.runTests();
        // Test completed successfully
        log('All tests completed successfully');
        // Output success message
        console.log('\n✅ VS Code AI Summarizer extension tests passed!\n');
    }
    catch (error) {
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
//# sourceMappingURL=test.js.map