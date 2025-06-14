"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer = () => {
    return (react_1.default.createElement("footer", { className: "bg-slate-900 text-white py-12" },
        react_1.default.createElement("div", { className: "container mx-auto px-4" },
            react_1.default.createElement("div", { className: "flex flex-col md:flex-row justify-between" },
                react_1.default.createElement("div", { className: "mb-8 md:mb-0" },
                    react_1.default.createElement("div", { className: "flex items-center space-x-2 mb-4" },
                        react_1.default.createElement("svg", { className: "h-8 w-8 text-blue-400", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                            react_1.default.createElement("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })),
                        react_1.default.createElement("span", { className: "text-xl font-bold" }, "AI Summarizer")),
                    react_1.default.createElement("p", { className: "text-slate-400 max-w-md" }, "Real-time visualization and summarization of AI coding assistant activities to reduce uncertainty and improve your development experience.")),
                react_1.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-8" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-lg font-semibold mb-4" }, "Resources"),
                        react_1.default.createElement("ul", { className: "space-y-2 text-slate-400" },
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#features", className: "hover:text-blue-400 transition-colors" }, "Features")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#how-it-works", className: "hover:text-blue-400 transition-colors" }, "How It Works")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#installation", className: "hover:text-blue-400 transition-colors" }, "Installation")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#configuration", className: "hover:text-blue-400 transition-colors" }, "Configuration")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "#faq", className: "hover:text-blue-400 transition-colors" }, "FAQ")))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-lg font-semibold mb-4" }, "Connect"),
                        react_1.default.createElement("ul", { className: "space-y-2 text-slate-400" },
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "https://github.com/ai-summarizer/vscode-extension", target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors flex items-center" },
                                    react_1.default.createElement("svg", { className: "h-4 w-4 mr-2", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                        react_1.default.createElement("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })),
                                    "GitHub")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "https://twitter.com/ai_summarizer", target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-400 transition-colors flex items-center" },
                                    react_1.default.createElement("svg", { className: "h-4 w-4 mr-2", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                        react_1.default.createElement("path", { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" })),
                                    "Twitter")),
                            react_1.default.createElement("li", null,
                                react_1.default.createElement("a", { href: "mailto:support@ai-summarizer.com", className: "hover:text-blue-400 transition-colors flex items-center" },
                                    react_1.default.createElement("svg", { className: "h-4 w-4 mr-2", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                                        react_1.default.createElement("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
                                        react_1.default.createElement("polyline", { points: "22,6 12,13 2,6" })),
                                    "Email")))),
                    react_1.default.createElement("div", { className: "col-span-2 md:col-span-1" },
                        react_1.default.createElement("h3", { className: "text-lg font-semibold mb-4" }, "Stay Updated"),
                        react_1.default.createElement("p", { className: "text-slate-400 mb-4" }, "Subscribe to our newsletter for updates, tips, and new features."),
                        react_1.default.createElement("form", { className: "flex" },
                            react_1.default.createElement("input", { type: "email", placeholder: "Your email", className: "px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow bg-slate-800 text-white border border-slate-700" }),
                            react_1.default.createElement("button", { type: "submit", className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg transition-colors" }, "Subscribe"))))),
            react_1.default.createElement("div", { className: "mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center" },
                react_1.default.createElement("p", { className: "text-slate-500 mb-4 md:mb-0" },
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " AI Summarizer. All rights reserved."),
                react_1.default.createElement("div", { className: "flex space-x-6" },
                    react_1.default.createElement("a", { href: "#", className: "text-slate-500 hover:text-slate-300 transition-colors" }, "Privacy Policy"),
                    react_1.default.createElement("a", { href: "#", className: "text-slate-500 hover:text-slate-300 transition-colors" }, "Terms of Service"),
                    react_1.default.createElement("a", { href: "#", className: "text-slate-500 hover:text-slate-300 transition-colors" }, "License"))))));
};
exports.default = Footer;
//# sourceMappingURL=Footer.js.map