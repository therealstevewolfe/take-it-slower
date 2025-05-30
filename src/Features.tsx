import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Real-time Task Monitoring",
      description: "Captures and visualizes AI assistant activities as they happen, ensuring you never lose track of what's being done.",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Color-coded Visualization",
      description: "Intuitive color scheme helps you instantly understand task status: green for completed, blue for in-progress, yellow for queued, and red for errors.",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Hierarchical Task View",
      description: "See the relationships between tasks and subtasks with a clear, hierarchical structure that shows dependencies and workflow.",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: "Timeline View",
      description: "Chronological representation of all AI activities, giving you a clear picture of what happened when.",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      )
    },
    {
      title: "Status Bar Integration",
      description: "Quick access to AI activity status directly from the VS Code status bar, keeping you informed without taking up screen space.",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: "Customizable Notifications",
      description: "Control when and how you're notified of AI activities, ensuring you get the information you need without disruption.",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          AI Summarizer provides powerful tools to help you understand and track AI coding assistant activities in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-slate-800/50 rounded-lg p-8 border border-blue-100 dark:border-slate-700">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">Before & After</h3>
            <p className="mb-4">
              Without AI Summarizer, keeping track of AI assistant activities can be overwhelming and confusing:
            </p>
            <ul className="list-disc pl-5 mb-4 text-slate-700 dark:text-slate-300">
              <li>Uncertainty about what the AI is currently working on</li>
              <li>Difficulty tracking multiple simultaneous tasks</li>
              <li>No clear indication of task progress or completion</li>
              <li>Cognitive overload from trying to follow rapid AI outputs</li>
            </ul>
            <p>
              With AI Summarizer, you get clear, visual feedback that reduces cognitive load and improves your development experience.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30 text-red-800 dark:text-red-300">
                <div className="font-medium">Without AI Summarizer</div>
                <div className="text-sm">Overwhelming, confusing output</div>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-900/30 text-green-800 dark:text-green-300">
                <div className="font-medium">With AI Summarizer</div>
                <div className="text-sm">Clear, organized visual feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
