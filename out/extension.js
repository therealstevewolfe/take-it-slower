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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const aiSummarizer_1 = require("./extension/aiSummarizer");
// This method is called when the extension is activated
function activate(context) {
    console.log('AI Summarizer extension is now active');
    // Create and initialize the main extension class
    const aiSummarizer = new aiSummarizer_1.AISummarizer(context);
    // Add to subscriptions to ensure proper disposal
    context.subscriptions.push(aiSummarizer);
    // Show initial activation message
    vscode.window.showInformationMessage('AI Summarizer activated. Monitoring AI assistant activities.');
}
exports.activate = activate;
// This method is called when the extension is deactivated
function deactivate() {
    console.log('AI Summarizer extension is now deactivated');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map