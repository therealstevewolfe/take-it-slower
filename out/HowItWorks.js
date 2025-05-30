"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Monitoring AI Output",
            description: "AI Summarizer continuously monitors the output channels of AI coding assistants like Roo Code and Cline.",
            icon: ( // Added JSX.Element type annotation
            react_1.default.createElement("svg", { className: "h-8 w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                react_1.default.createElement("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })))
        },
        {
            number: 2,
            title: "Parsing & Analysis",
            description: "The extension intelligently parses the output to identify tasks, progress updates, and completion statuses.",
            icon: (react_1.default.createElement("svg", { className: "h-8 w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })))
        },
        {
            number: 3,
            title: "Task Management",
            description: "Tasks are organized into a hierarchical structure, tracking relationships between parent tasks and subtasks.",
            icon: (react_1.default.createElement("svg", { className: "h-8 w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
                react_1.default.createElement("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
                react_1.default.createElement("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
                react_1.default.createElement("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
                react_1.default.createElement("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
                react_1.default.createElement("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })))
        },
        {
            number: 4,
            title: "Visual Representation",
            description: "Tasks are displayed with intuitive color coding and progress indicators in the Activity Panel and Timeline View.",
            icon: (react_1.default.createElement("svg", { className: "h-8 w-8", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
                react_1.default.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                react_1.default.createElement("polyline", { points: "21 15 16 10 5 21" })))
        }
    ];
    return (react_1.default.createElement("section", { id: "how-it-works", className: "py-16" },
        react_1.default.createElement("div", { className: "text-center mb-16" },
            react_1.default.createElement("h2", { className: "text-3xl font-bold mb-4" }, "How It Works"),
            react_1.default.createElement("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto" }, "AI Summarizer seamlessly integrates with VS Code to provide real-time visualization of AI coding assistant activities.")),
        react_1.default.createElement("div", { className: "relative" },
            react_1.default.createElement("div", { className: "absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 hidden md:block", style: { transform: 'translateX(-50%)' } }),
            react_1.default.createElement("div", { className: "space-y-12" }, steps.map((step, index) => (react_1.default.createElement("div", { key: index, className: "relative" },
                react_1.default.createElement("div", { className: "flex flex-col md:flex-row items-center" },
                    react_1.default.createElement("div", { className: "md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-xl mb-4" }, step.number),
                    react_1.default.createElement("div", { className: `md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16'}` },
                        react_1.default.createElement("h3", { className: "text-xl font-semibold mb-2 flex items-center md:block" },
                            react_1.default.createElement("span", { className: "mr-3 text-blue-600 dark:text-blue-400 md:hidden" }, step.icon),
                            step.title),
                        react_1.default.createElement("p", { className: "text-slate-600 dark:text-slate-400" }, step.description)),
                    react_1.default.createElement("div", { className: "hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-200 dark:border-blue-900 z-10 absolute left-1/2", style: { transform: 'translateX(-50%)' } },
                        react_1.default.createElement("div", { className: "text-blue-600 dark:text-blue-400" }, step.icon)))))))),
        react_1.default.createElement("div", { className: "mt-20 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700" },
            react_1.default.createElement("h3", { className: "text-2xl font-bold mb-6" }, "Integration with VS Code"),
            react_1.default.createElement("div", { className: "flex flex-col md:flex-row" },
                react_1.default.createElement("div", { className: "md:w-1/2 md:pr-8 mb-6 md:mb-0" },
                    react_1.default.createElement("h4", { className: "text-lg font-semibold mb-3" }, "Seamless Experience"),
                    react_1.default.createElement("p", { className: "mb-4 text-slate-600 dark:text-slate-400" }, "AI Summarizer integrates directly into your VS Code environment, providing:"),
                    react_1.default.createElement("ul", { className: "list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400" },
                        react_1.default.createElement("li", null, "A dedicated Activity Panel in the sidebar"),
                        react_1.default.createElement("li", null, "Status bar indicators for quick access"),
                        react_1.default.createElement("li", null, "Keyboard shortcuts for common actions"),
                        react_1.default.createElement("li", null, "Customizable notifications"),
                        react_1.default.createElement("li", null, "Theme-aware styling that matches your VS Code theme"))),
                react_1.default.createElement("div", { className: "md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700 pt-6 md:pt-0" },
                    react_1.default.createElement("h4", { className: "text-lg font-semibold mb-3" }, "Performance Optimized"),
                    react_1.default.createElement("p", { className: "mb-4 text-slate-600 dark:text-slate-400" }, "The extension is designed to be lightweight and efficient:"),
                    react_1.default.createElement("ul", { className: "list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400" },
                        react_1.default.createElement("li", null, "Minimal CPU and memory usage"),
                        react_1.default.createElement("li", null, "Throttled updates to prevent UI flickering"),
                        react_1.default.createElement("li", null, "Background processing to avoid editor slowdowns"),
                        react_1.default.createElement("li", null, "Efficient DOM updates using VS Code WebView API"),
                        react_1.default.createElement("li", null, "Optimized for long coding sessions")))))));
};
exports.default = HowItWorks;
//# sourceMappingURL=HowItWorks.js.map