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
exports.AISummarizer = void 0;
const vscode = __importStar(require("vscode"));
const taskManager_1 = require("../taskManager/taskManager");
const outputParser_1 = require("../parsers/outputParser");
const visualizationEngine_1 = require("../visualization/visualizationEngine");
const settingsManager_1 = require("../utils/settingsManager");
/**
 * Main extension class that coordinates all components
 */
class AISummarizer {
    constructor(context) {
        this.disposables = [];
        this.settingsManager = new settingsManager_1.SettingsManager();
        this.taskManager = new taskManager_1.TaskManager();
        this.outputParser = new outputParser_1.OutputParser(this.taskManager, this.settingsManager);
        this.visualizationEngine = new visualizationEngine_1.VisualizationEngine(this.taskManager, this.settingsManager, context);
        // Create status bar item
        this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        this.statusBarItem.command = 'aiSummarizer.togglePanel';
        this.statusBarItem.text = '$(sync) AI: Initializing...';
        this.statusBarItem.tooltip = 'AI Summarizer: Click to toggle activity panel';
        this.statusBarItem.show();
        this.initialize(context);
    }
    initialize(context) {
        // Register commands
        this.registerCommands(context);
        // Start monitoring output channels
        this.startMonitoring();
        // Update status bar initially
        this.updateStatusBar();
        // Set up regular status updates
        setInterval(() => this.updateStatusBar(), 1000);
    }
    registerCommands(context) {
        // Register all commands defined in package.json
        this.disposables.push(vscode.commands.registerCommand('aiSummarizer.togglePanel', () => {
            this.visualizationEngine.togglePanel();
        }), vscode.commands.registerCommand('aiSummarizer.focusCurrentTask', () => {
            this.visualizationEngine.focusCurrentTask();
        }), vscode.commands.registerCommand('aiSummarizer.collapseAll', () => {
            this.visualizationEngine.collapseAll();
        }), vscode.commands.registerCommand('aiSummarizer.expandAll', () => {
            this.visualizationEngine.expandAll();
        }));
        // Add all disposables to context
        this.disposables.forEach(d => context.subscriptions.push(d));
    }
    startMonitoring() {
        // Start monitoring output channels and terminals
        this.outputParser.startMonitoring();
    }
    updateStatusBar() {
        const stats = this.taskManager.getTaskStats();
        if (stats.active === 0 && stats.completed === 0 && stats.queued === 0) {
            this.statusBarItem.text = '$(sync) AI: Idle';
        }
        else if (stats.active > 0) {
            this.statusBarItem.text = `$(sync~spin) AI: ${stats.active} active, ${stats.completed} done`;
        }
        else {
            this.statusBarItem.text = `$(check) AI: ${stats.completed} done`;
        }
    }
    dispose() {
        this.statusBarItem.dispose();
        this.outputParser.dispose();
        this.visualizationEngine.dispose();
        this.disposables.forEach(d => d.dispose());
    }
}
exports.AISummarizer = AISummarizer;
//# sourceMappingURL=aiSummarizer.js.map