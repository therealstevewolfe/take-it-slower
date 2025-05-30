"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FAQ = () => {
    const faqs = [
        {
            question: "What is AI Summarizer?",
            answer: "AI Summarizer is a VS Code extension that provides real-time visualization and summarization of AI coding assistant activities. It helps developers understand what AI assistants like Roo Code and Cline are doing, reducing uncertainty and improving the development experience."
        },
        {
            question: "Which AI coding assistants are supported?",
            answer: "AI Summarizer supports Roo Code and Cline out of the box. You can also configure it to work with any other AI coding assistant that outputs to a VS Code output channel by adding custom assistant configurations in the settings."
        },
        {
            question: "How does AI Summarizer work?",
            answer: "AI Summarizer monitors the output channels of AI coding assistants, parses the output to identify tasks and their status, organizes them into a hierarchical structure, and visualizes them with intuitive color coding and progress indicators in the Activity Panel and Timeline View."
        },
        {
            question: "Will AI Summarizer slow down VS Code?",
            answer: "No, AI Summarizer is designed to be lightweight and efficient. It uses throttled updates, background processing, and efficient DOM updates to minimize its impact on VS Code performance."
        },
        {
            question: "Can I customize the appearance of AI Summarizer?",
            answer: "Yes, AI Summarizer offers several customization options including different color themes, animation settings, and view modes. You can configure these in the VS Code settings."
        },
        {
            question: "Does AI Summarizer work with all VS Code themes?",
            answer: "Yes, AI Summarizer is designed to work with all VS Code themes, including both light and dark variants. It uses theme-aware styling to match your VS Code theme."
        },
        {
            question: "How do I access the AI Summarizer panel?",
            answer: "After installation, you'll see a new icon in the Activity Bar. Clicking on this icon will open the AI Summarizer panel. You can also use the keyboard shortcut Ctrl+Shift+A (Cmd+Shift+A on macOS)."
        },
        {
            question: "Can I disable notifications?",
            answer: "Yes, you can disable notifications or customize which events trigger notifications in the VS Code settings under 'AI Summarizer > Notifications'."
        },
        {
            question: "Is AI Summarizer open source?",
            answer: "Yes, AI Summarizer is open source and available on GitHub. You can contribute to the project, report issues, or suggest new features through the GitHub repository."
        },
        {
            question: "How do I report bugs or request features?",
            answer: "You can report bugs or request features through the GitHub repository's issue tracker. We welcome community contributions and feedback to improve AI Summarizer."
        }
    ];
    return (react_1.default.createElement("section", { id: "faq", className: "py-16" },
        react_1.default.createElement("div", { className: "text-center mb-16" },
            react_1.default.createElement("h2", { className: "text-3xl font-bold mb-4" }, "Frequently Asked Questions"),
            react_1.default.createElement("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto" }, "Find answers to common questions about the AI Summarizer extension.")),
        react_1.default.createElement("div", { className: "max-w-4xl mx-auto" },
            react_1.default.createElement("div", { className: "bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700" },
                react_1.default.createElement("div", { className: "divide-y divide-slate-200 dark:divide-slate-700" }, faqs.map((faq, index) => (react_1.default.createElement("details", { key: index, className: "group p-6 cursor-pointer", open: index === 0 },
                    react_1.default.createElement("summary", { className: "flex justify-between items-center font-semibold text-lg cursor-pointer list-none" },
                        faq.question,
                        react_1.default.createElement("span", { className: "transition group-open:rotate-180" },
                            react_1.default.createElement("svg", { className: "h-5 w-5 text-slate-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })))),
                    react_1.default.createElement("div", { className: "mt-3 text-slate-600 dark:text-slate-400" },
                        react_1.default.createElement("p", null, faq.answer))))))),
            react_1.default.createElement("div", { className: "mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-900/30" },
                react_1.default.createElement("div", { className: "flex flex-col md:flex-row items-center" },
                    react_1.default.createElement("div", { className: "md:w-2/3 mb-6 md:mb-0 md:pr-8" },
                        react_1.default.createElement("h3", { className: "text-xl font-bold mb-3" }, "Still Have Questions?"),
                        react_1.default.createElement("p", { className: "mb-4 text-slate-700 dark:text-slate-300" }, "If you couldn't find the answer to your question, feel free to reach out to us through our GitHub repository or contact us directly."),
                        react_1.default.createElement("div", { className: "flex flex-wrap gap-4" },
                            react_1.default.createElement("a", { href: "https://github.com/ai-summarizer/vscode-extension/issues", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors" },
                                react_1.default.createElement("svg", { className: "h-5 w-5 mr-2", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                    react_1.default.createElement("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })),
                                "GitHub Issues"),
                            react_1.default.createElement("a", { href: "mailto:support@ai-summarizer.com", className: "inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors" },
                                react_1.default.createElement("svg", { className: "h-5 w-5 mr-2", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                    react_1.default.createElement("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
                                    react_1.default.createElement("polyline", { points: "22,6 12,13 2,6" })),
                                "Contact Support"))),
                    react_1.default.createElement("div", { className: "md:w-1/3 flex justify-center" },
                        react_1.default.createElement("div", { className: "bg-white dark:bg-slate-800 p-4 rounded-full shadow-lg border border-slate-200 dark:border-slate-700" },
                            react_1.default.createElement("svg", { className: "h-24 w-24 text-blue-600 dark:text-blue-400", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" },
                                react_1.default.createElement("circle", { cx: "12", cy: "12", r: "10" }),
                                react_1.default.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
                                react_1.default.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })))))))));
};
exports.default = FAQ;
//# sourceMappingURL=FAQ.js.map