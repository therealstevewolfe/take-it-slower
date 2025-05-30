"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Hero = () => {
    return (<section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Real-time Visualization for AI Coding Assistants
            </h1>
            <p className="text-xl mb-8 text-slate-700 dark:text-slate-300">
              Reduce uncertainty and improve your development experience when working with lightning-fast AI coding assistants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#installation" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center transition-colors">
                Download Extension
              </a>
              <a href="#how-it-works" className="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg text-center transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              {/* This would be replaced with an actual screenshot or animation */}
              <div className="bg-white dark:bg-slate-800 p-4 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                    <svg className="h-12 w-12 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400">
                    Interactive demo will be displayed here
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent text-white p-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">AI Task Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
exports.default = Hero;
//# sourceMappingURL=Hero.js.map