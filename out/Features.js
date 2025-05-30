"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Features = () => {
    const features = [
        {
            title: "Real-time Task Monitoring",
            description: "Captures and visualizes AI assistant activities as they happen, ensuring you never lose track of what's being done.",
            icon: (react_1.default.createElement("svg", { className: "h-10 w-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                react_1.default.createElement("polyline", { points: "12 6 12 12 16 14" })))
        },
        {
            title: "Color-coded Visualization",
            description: "Intuitive color scheme helps you instantly understand task status: green for completed, blue for in-progress, yellow for queued, and red for errors.",
            icon: (react_1.default.createElement("svg", { className: "h-10 w-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                react_1.default.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                react_1.default.createElement("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })))
        },
        {
            title: "Hierarchical Task View",
            description: "See the relationships between tasks and subtasks with a clear, hierarchical structure that shows dependencies and workflow.",
            icon: (react_1.default.createElement("svg", { className: "h-10 w-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
                react_1.default.createElement("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
                react_1.default.createElement("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
                react_1.default.createElement("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
                react_1.default.createElement("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
                react_1.default.createElement("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })))
        },
        {
            title: "Timeline View",
            description: "Chronological representation of all AI activities, giving you a clear picture of what happened when.",
            icon: (react_1.default.createElement("svg", { className: "h-10 w-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" })))
        },
        {
            title: "Status Bar Integration",
            description: "Quick access to AI activity status directly from the VS Code status bar, keeping you informed without taking up screen space.",
            icon: (react_1.default.createElement("svg", { className: "h-10 w-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
                react_1.default.createElement("line", { x1: "3", y1: "9", x2: "21", y2: "9" }),
                react_1.default.createElement("line", { x1: "9", y1: "21", x2: "9", y2: "9" })))
        },
        {
            title: "Customizable Notifications",
            description: "Control when and how you're notified of AI activities, ensuring you get the information you need without disruption.",
            icon: (react_1.default.createElement("svg", { className: "h-10 w-10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
                react_1.default.createElement("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" })))
        }
    ];
    return (react_1.default.createElement("section", { id: "features", className: "py-16" },
        react_1.default.createElement("div", { className: "text-center mb-16" },
            react_1.default.createElement("h2", { className: "text-3xl font-bold mb-4" }, "Key Features"),
            react_1.default.createElement("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto" }, "AI Summarizer provides powerful tools to help you understand and track AI coding assistant activities in real-time.")),
        react_1.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, features.map((feature, index) => (react_1.default.createElement("div", { key: index, className: "bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow" },
            react_1.default.createElement("div", { className: "text-blue-600 dark:text-blue-400 mb-4" }, feature.icon),
            react_1.default.createElement("h3", { className: "text-xl font-semibold mb-2" }, feature.title),
            react_1.default.createElement("p", { className: "text-slate-600 dark:text-slate-400" }, feature.description))))),
        react_1.default.createElement("div", { className: "mt-16 bg-blue-50 dark:bg-slate-800/50 rounded-lg p-8 border border-blue-100 dark:border-slate-700" },
            react_1.default.createElement("div", { className: "flex flex-col md:flex-row items-center" },
                react_1.default.createElement("div", { className: "md:w-2/3 mb-6 md:mb-0 md:pr-8" },
                    react_1.default.createElement("h3", { className: "text-2xl font-bold mb-4" }, "Before & After"),
                    react_1.default.createElement("p", { className: "mb-4" }, "Without AI Summarizer, keeping track of AI assistant activities can be overwhelming and confusing:"),
                    react_1.default.createElement("ul", { className: "list-disc pl-5 mb-4 text-slate-700 dark:text-slate-300" },
                        react_1.default.createElement("li", null, "Uncertainty about what the AI is currently working on"),
                        react_1.default.createElement("li", null, "Difficulty tracking multiple simultaneous tasks"),
                        react_1.default.createElement("li", null, "No clear indication of task progress or completion"),
                        react_1.default.createElement("li", null, "Cognitive overload from trying to follow rapid AI outputs")),
                    react_1.default.createElement("p", null, "With AI Summarizer, you get clear, visual feedback that reduces cognitive load and improves your development experience.")),
                react_1.default.createElement("div", { className: "md:w-1/3" },
                    react_1.default.createElement("div", { className: "bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700" },
                        react_1.default.createElement("div", { className: "mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30 text-red-800 dark:text-red-300" },
                            react_1.default.createElement("div", { className: "font-medium" }, "Without AI Summarizer"),
                            react_1.default.createElement("div", { className: "text-sm" }, "Overwhelming, confusing output")),
                        react_1.default.createElement("div", { className: "p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-900/30 text-green-800 dark:text-green-300" },
                            react_1.default.createElement("div", { className: "font-medium" }, "With AI Summarizer"),
                            react_1.default.createElement("div", { className: "text-sm" }, "Clear, organized visual feedback"))))))));
};
exports.default = Features;
//# sourceMappingURL=Features.js.map