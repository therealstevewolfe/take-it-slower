import React from 'react';

const DemoSection = () => {
  return (
    <section id="demo" className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Watch how AI Summarizer transforms your experience with AI coding assistants.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="bg-slate-800 text-white p-2 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm">Visual Studio Code</div>
            </div>
            
            <div className="flex h-[500px]">
              {/* VS Code Sidebar */}
              <div className="w-12 bg-slate-700 flex flex-col items-center py-4 space-y-6">
                <div className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="w-6 h-6 rounded-md bg-slate-600 flex items-center justify-center text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="w-6 h-6 rounded-md bg-slate-600 flex items-center justify-center text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
              </div>
              
              {/* AI Summarizer Panel */}
              <div className="w-64 bg-slate-100 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700 overflow-y-auto">
                <div className="p-3 bg-slate-200 dark:bg-slate-700 border-b border-slate-300 dark:border-slate-600">
                  <h3 className="font-semibold flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    AI Activities
                  </h3>
                </div>
                
                <div className="p-3">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Roo Code</h4>
                      <button className="text-slate-500 dark:text-slate-400">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="space-y-2 ml-2">
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Initialize project</span>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Implement authentication</span>
                        <span className="ml-2 text-xs text-blue-500">75%</span>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-red-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span>Fix webpack configuration</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Cline</h4>
                      <button className="text-slate-500 dark:text-slate-400">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="space-y-2 ml-2">
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-purple-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <span>Analyzing code structure</span>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-yellow-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <span>Refactor user model</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="flex-1 bg-white dark:bg-slate-900 overflow-y-auto">
                <div className="p-4 font-mono text-sm">
                  <div className="flex">
                    <div className="text-right pr-4 text-slate-400 select-none w-8">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    <div className="flex-1 overflow-x-auto">
                      <pre className="text-slate-800 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400">import</span> * <span className="text-blue-600 dark:text-blue-400">as</span> vscode <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'vscode'</span>;{'\n'}
                        <span className="text-blue-600 dark:text-blue-400">import</span> {'{'} AISummarizer {'}'} <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'./extension/aiSummarizer'</span>;{'\n\n'}
                        <span className="text-green-600 dark:text-green-400">// This method is called when the extension is activated</span>{'\n'}
                        <span className="text-blue-600 dark:text-blue-400">export function</span> <span className="text-yellow-600 dark:text-yellow-400">activate</span>(context: vscode.ExtensionContext) {'{'}{'\n'}
                        {'  '}console.<span className="text-yellow-600 dark:text-yellow-400">log</span>(<span className="text-green-600 dark:text-green-400">'AI Summarizer extension is now active'</span>);{'\n\n'}
                        {'  '}<span className="text-green-600 dark:text-green-400">// Create and initialize the main extension class</span>{'\n'}
                        {'  '}<span className="text-blue-600 dark:text-blue-400">const</span> aiSummarizer = <span className="text-blue-600 dark:text-blue-400">new</span> <span className="text-yellow-600 dark:text-yellow-400">AISummarizer</span>(context);{'\n\n'}
                        {'  '}<span className="text-green-600 dark:text-green-400">// Add to subscriptions to ensure proper disposal</span>{'\n'}
                        {'  '}context.subscriptions.<span className="text-yellow-600 dark:text-yellow-400">push</span>(aiSummarizer);{'\n\n'}
                        {'  '}<span className="text-green-600 dark:text-green-400">// Show initial activation message</span>{'\n'}
                        {'  '}vscode.window.<span className="text-yellow-600 dark:text-yellow-400">showInformationMessage</span>(<span className="text-green-600 dark:text-green-400">'AI Summarizer activated. Monitoring AI assistant activities.'</span>);{'\n'}
                        {'}'}{'\n\n'}
                        <span className="text-green-600 dark:text-green-400">// This method is called when the extension is deactivated</span>{'\n'}
                        <span className="text-blue-600 dark:text-blue-400">export function</span> <span className="text-yellow-600 dark:text-yellow-400">deactivate</span>() {'{'}{'\n'}
                        {'  '}console.<span className="text-yellow-600 dark:text-yellow-400">log</span>(<span className="text-green-600 dark:text-green-400">'AI Summarizer extension is now deactivated'</span>);{'\n'}
                        {'}'}{'\n'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status Bar */}
            <div className="bg-slate-700 text-white p-1 flex justify-between text-xs">
              <div className="flex items-center space-x-4">
                <span>main</span>
                <span>UTF-8</span>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-3 w-3 animate-spin mr-1 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                  </svg>
                  <span>AI: 3 active, 4 done</span>
                </div>
                <span>Ln 15, Col 42</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              AI Summarizer provides real-time visualization of AI coding assistant activities, helping you stay informed and in control.
            </p>
            <a 
              href="#installation" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
