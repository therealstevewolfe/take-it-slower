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
exports.TestRunner = void 0;
const vscode = __importStar(require("vscode"));
const testUtility_1 = require("./utils/testUtility");
const taskManager_1 = require("./taskManager/taskManager");
const settingsManager_1 = require("./utils/settingsManager");
/**
 * Test runner for the VS Code AI Summarizer extension
 */
class TestRunner {
    constructor() {
        this.taskManager = new taskManager_1.TaskManager();
        this.testUtility = new testUtility_1.TestUtility(this.taskManager);
        this.settingsManager = new settingsManager_1.SettingsManager();
    }
    /**
     * Run comprehensive tests for the extension
     */
    async runTests() {
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
    async testAssistant(assistantType) {
        vscode.window.showInformationMessage(`Testing with ${assistantType} assistant...`);
        // Run test with sample outputs
        await this.testUtility.runTest(assistantType);
        vscode.window.showInformationMessage(`${assistantType} assistant test completed.`);
    }
}
exports.TestRunner = TestRunner;
//# sourceMappingURL=testRunner.js.map