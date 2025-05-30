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
exports.OutputParser = void 0;
const vscode = __importStar(require("vscode"));
const aiAssistantOutputAnalyzer_1 = require("./aiAssistantOutputAnalyzer");
/**
 * Responsible for parsing output from AI assistants and creating tasks
 */
class OutputParser {
    constructor(taskManager, settingsManager) {
        this.outputChannelDisposables = [];
        this.terminalDisposables = [];
        this.monitoredOutputChannels = new Map();
        this.taskManager = taskManager;
        this.settingsManager = settingsManager;
        this.outputAnalyzer = new aiAssistantOutputAnalyzer_1.AIAssistantOutputAnalyzer();
    }
    /**
     * Start monitoring output channels and terminals
     */
    startMonitoring() {
        // Start monitoring output channels
        this.monitorOutputChannels();
        // Start monitoring terminals
        this.monitorTerminals();
        // Listen for new output channels and terminals
        vscode.window.onDidOpenTerminal(terminal => {
            this.setupTerminalMonitoring(terminal);
        });
    }
    /**
     * Monitor all output channels
     */
    monitorOutputChannels() {
        // Get all configured AI assistants
        const assistants = this.settingsManager.getConfiguredAssistants();
        // For each assistant, try to find its output channel
        assistants.forEach(assistant => {
            if (!assistant.enabled) {
                return;
            }
            // Find or create the output channel
            const outputChannel = this.findOrCreateOutputChannel(assistant.outputChannel);
            if (outputChannel) {
                this.setupOutputChannelMonitoring(outputChannel, assistant.id);
            }
        });
    }
    /**
     * Find an output channel by name or create it if it doesn't exist
     */
    findOrCreateOutputChannel(name) {
        // Try to find existing output channel in the monitored map
        const existingChannel = this.monitoredOutputChannels.get(name);
        if (existingChannel) {
            return existingChannel;
        }
        // If not found, we'll wait for it to be created
        return undefined;
    }
    /**
     * Set up monitoring for a specific output channel
     */
    setupOutputChannelMonitoring(outputChannel, assistantId) {
        // Store the channel for later reference
        this.monitoredOutputChannels.set(assistantId, outputChannel);
        // We need to use a polling approach since VS Code doesn't provide events for output channel content changes
        const pollInterval = setInterval(() => {
            // This is a placeholder for actual implementation
            // In a real extension, we would need to use the VS Code API to read the output channel content
            // For now, we'll simulate this with a mock implementation
            this.processOutputChannelContent(outputChannel, assistantId);
        }, 500);
        // Store the interval for cleanup
        this.outputChannelDisposables.push({ dispose: () => clearInterval(pollInterval) });
    }
    /**
     * Process content from an output channel
     */
    processOutputChannelContent(outputChannel, assistantId) {
        // In a real implementation, we would read the content of the output channel
        // and pass it to the analyzer
        // For now, we'll simulate this with a mock implementation
        // In a real extension, we would need to track what content we've already processed
        // This is where the actual parsing logic would go
        // We would extract task information from the output and create/update tasks
        // Example (simulated):
        // const content = getOutputChannelContent(outputChannel);
        // const newTasks = this.outputAnalyzer.analyzeOutput(content, assistantId);
        // newTasks.forEach(taskInfo => {
        //   const task = this.taskManager.createTask(
        //     taskInfo.id,
        //     taskInfo.name,
        //     assistantId,
        //     taskInfo.type,
        //     taskInfo.parentId
        //   );
        //   
        //   if (taskInfo.status) {
        //     this.taskManager.updateTaskStatus(taskInfo.id, taskInfo.status, taskInfo.progress);
        //   }
        //   
        //   if (taskInfo.details) {
        //     this.taskManager.updateTaskDetails(taskInfo.id, taskInfo.details);
        //   }
        // });
    }
    /**
     * Monitor all terminals
     */
    monitorTerminals() {
        // Monitor existing terminals
        vscode.window.terminals.forEach(terminal => {
            this.setupTerminalMonitoring(terminal);
        });
    }
    /**
     * Set up monitoring for a specific terminal
     */
    setupTerminalMonitoring(terminal) {
        // In a real implementation, we would need to use the Terminal API
        // to capture the output from the terminal
        // For VS Code, this is challenging as there's no direct API to read terminal output
        // We might need to use custom terminal links or commands to capture this information
        // For now, we'll just set up a listener for when the terminal is closed
        const disposable = vscode.window.onDidCloseTerminal(closedTerminal => {
            if (closedTerminal === terminal) {
                // Clean up any resources associated with this terminal
            }
        });
        this.terminalDisposables.push(disposable);
    }
    /**
     * Clean up resources
     */
    dispose() {
        this.outputChannelDisposables.forEach(d => d.dispose());
        this.terminalDisposables.forEach(d => d.dispose());
    }
}
exports.OutputParser = OutputParser;
//# sourceMappingURL=outputParser.js.map