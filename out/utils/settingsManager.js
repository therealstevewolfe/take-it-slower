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
exports.SettingsManager = void 0;
const vscode = __importStar(require("vscode"));
/**
 * Manages extension settings
 */
class SettingsManager {
    constructor() { }
    /**
     * Get whether the extension is enabled
     */
    getEnabled() {
        return vscode.workspace.getConfiguration('aiSummarizer.general').get('enabled', true);
    }
    /**
     * Get the refresh rate for UI updates
     */
    getRefreshRate() {
        return vscode.workspace.getConfiguration('aiSummarizer.general').get('refreshRate', 200);
    }
    /**
     * Get the maximum number of visible tasks
     */
    getMaxVisibleTasks() {
        return vscode.workspace.getConfiguration('aiSummarizer.general').get('maxVisibleTasks', 50);
    }
    /**
     * Get the default view mode
     */
    getDefaultView() {
        return vscode.workspace.getConfiguration('aiSummarizer.general').get('defaultView', 'hierarchical');
    }
    /**
     * Get whether notifications are enabled
     */
    getNotificationsEnabled() {
        return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('enabled', true);
    }
    /**
     * Get whether to show task start notifications
     */
    getShowTaskStartNotifications() {
        return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('showTaskStart', true);
    }
    /**
     * Get whether to show task completion notifications
     */
    getShowTaskCompletionNotifications() {
        return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('showTaskCompletion', true);
    }
    /**
     * Get whether to show error notifications
     */
    getShowErrorNotifications() {
        return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('showErrors', true);
    }
    /**
     * Get the maximum number of notifications per minute
     */
    getMaxNotificationsPerMinute() {
        return vscode.workspace.getConfiguration('aiSummarizer.notifications').get('maxNotificationsPerMinute', 5);
    }
    /**
     * Get the color theme
     */
    getColorTheme() {
        return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('colorTheme', 'default');
    }
    /**
     * Get whether animations are enabled
     */
    getAnimationsEnabled() {
        return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('animationsEnabled', true);
    }
    /**
     * Get whether to show the status bar indicator
     */
    getShowStatusBarIndicator() {
        return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('showStatusBarIndicator', true);
    }
    /**
     * Get whether to use compact mode
     */
    getCompactMode() {
        return vscode.workspace.getConfiguration('aiSummarizer.appearance').get('compactMode', false);
    }
    /**
     * Get all configured AI assistants
     */
    getConfiguredAssistants() {
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
exports.SettingsManager = SettingsManager;
//# sourceMappingURL=settingsManager.js.map