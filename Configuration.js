"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Configuration = () => {
    return (<section id="configuration" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Configuration</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Customize AI Summarizer to match your workflow and preferences.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6">Extension Settings</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center text-blue-700 dark:text-blue-400">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  General Settings
                </h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.general.enabled</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Boolean</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enable or disable the AI Summarizer extension</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>true</code></div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.general.refreshRate</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Number</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Refresh rate for UI updates in milliseconds</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>200</code></div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.general.maxVisibleTasks</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Number</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Maximum number of visible tasks in the activity panel</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>50</code></div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.general.defaultView</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">String</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Default view mode for the activity panel</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>"hierarchical"</code></div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Options: <code>"hierarchical"</code>, <code>"timeline"</code>, <code>"compact"</code></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center text-blue-700 dark:text-blue-400">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                  Notification Settings
                </h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.notifications.enabled</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Boolean</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enable or disable notifications</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>true</code></div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.notifications.showTaskStart</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Boolean</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Show notifications when tasks start</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>true</code></div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.notifications.showTaskCompletion</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Boolean</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Show notifications when tasks complete</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>true</code></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center text-blue-700 dark:text-blue-400">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                  </svg>
                  Appearance Settings
                </h4>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.appearance.colorTheme</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">String</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Color theme for the AI Summarizer</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>"default"</code></div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Options: <code>"default"</code>, <code>"highContrast"</code>, <code>"monochrome"</code>, <code>"pastel"</code></div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.appearance.animationsEnabled</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Boolean</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Enable or disable animations</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>true</code></div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">aiSummarizer.appearance.showStatusBarIndicator</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Boolean</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Show status bar indicator</p>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Default: <code>true</code></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4">How to Configure</h3>
            <ol className="space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex">
                <span className="font-medium mr-2">1.</span>
                <span>Open VS Code Settings (File {'>'} Preferences {'>'} Settings or press <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-sm">Ctrl+,</code>)</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">2.</span>
                <span>Search for "AI Summarizer" to see all available settings</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">3.</span>
                <span>Modify settings according to your preferences</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">4.</span>
                <span>Changes are applied immediately, no restart required</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold mb-4">Custom AI Assistants</h3>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            You can configure AI Summarizer to monitor custom AI assistants by adding them to your settings:
          </p>
          
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700 mb-6">
            <pre className="text-sm overflow-x-auto"><code>{`"aiSummarizer.assistants.custom": [
  {
    "id": "customAssistant",
    "enabled": true,
    "outputChannel": "Custom Assistant"
  }
]`}</code></pre>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400">
            This allows you to extend AI Summarizer's monitoring capabilities to any AI coding assistant that outputs to a VS Code output channel.
          </p>
        </div>
      </div>
    </section>);
};
exports.default = Configuration;
//# sourceMappingURL=Configuration.js.map