"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// Create a component to display the VS Code extension documentation
const DocsViewer = () => {
    return (<div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
      <h2 className="text-2xl font-bold mb-4">Extension Documentation</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Task Visualization</h3>
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
              <span className="font-medium task-completed">Completed Task</span>
              <span className="ml-auto text-slate-500 dark:text-slate-400">100%</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
              <span className="font-medium task-in-progress">In-Progress Task</span>
              <div className="ml-auto bg-slate-200 dark:bg-slate-700 w-16 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '75%' }}></div>
              </div>
              <span className="ml-2 text-slate-500 dark:text-slate-400">75%</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></div>
              <span className="font-medium task-queued">Queued Task</span>
              <span className="ml-auto text-slate-500 dark:text-slate-400">Pending</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
              <span className="font-medium task-error">Error Task</span>
              <span className="ml-auto text-slate-500 dark:text-slate-400">Failed</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-purple-500 mr-3"></div>
              <span className="font-medium task-analyzing">Analyzing Task</span>
              <div className="ml-auto bg-slate-200 dark:bg-slate-700 w-16 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full animate-pulse-slow" style={{ width: '40%' }}></div>
              </div>
              <span className="ml-2 text-slate-500 dark:text-slate-400">40%</span>
            </div>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          AI Summarizer uses intuitive color coding to help you instantly understand the status of AI assistant tasks.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Task Hierarchy Example</h3>
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="font-medium">Initialize project</span>
            </li>
            <li className="ml-6 flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Create directory structure</span>
            </li>
            <li className="ml-6 flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Set up package.json</span>
            </li>
            <li className="ml-6 flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Install dependencies</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="font-medium">Implement authentication</span>
              <span className="ml-2 text-sm text-blue-500">75%</span>
            </li>
            <li className="ml-6 flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Creating auth middleware</span>
            </li>
            <li className="ml-6 flex items-center">
              <svg className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span>Set up JWT validation</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span className="font-medium">Fix webpack configuration</span>
              <span className="ml-2 text-sm text-red-500">Error</span>
            </li>
          </ul>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Tasks are organized in a hierarchical structure, showing parent-child relationships and dependencies.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Status Bar Integration</h3>
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
          <div className="flex items-center justify-between bg-slate-800 text-white px-4 py-1 text-sm">
            <div></div>
            <div className="flex items-center">
              <svg className="h-4 w-4 animate-spin mr-1 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
              </svg>
              <span>AI: 3 active, 4 done</span>
            </div>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          The status bar indicator provides at-a-glance information about AI assistant activities without taking up valuable screen space.
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Task Detail View</h3>
        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <div className="border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-3">
              <h4 className="font-semibold">Implement Authentication</h4>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Status</div>
                  <div className="font-medium text-blue-600 dark:text-blue-400">In Progress (75%)</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Started</div>
                  <div>2 minutes ago</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Current step</div>
                  <div>Creating authentication middleware</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Next step</div>
                  <div>Set up JWT validation</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Files affected</div>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 mr-1 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>src/middleware/auth.js</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 mr-1 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>src/services/authService.js</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Dependencies</div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Initialize project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Detailed task views provide comprehensive information about each task, including progress, affected files, and dependencies.
        </p>
      </div>
    </div>);
};
exports.default = DocsViewer;
//# sourceMappingURL=DocsViewer.js.map