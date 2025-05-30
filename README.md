![a9Rm60MLgm](https://github.com/user-attachments/assets/aae4beaa-3af2-4a1e-8705-e738e925fc16)

# VS Code AI Summarizer Extension - README

## DISCLAIMER:

Manus AI did this entire thing. I haven't tested yet but I think it's quite novel the whole process and this is the first project I've done with it. So move with caution and all that stuff. Otherwise, thank you for stopping by.

## Overview

The VS Code AI Summarizer extension provides real-time visualization and summarization of AI coding assistant activities (like Roo Code, Cline, etc.). It helps developers understand what AI assistants are doing, reducing uncertainty and improving the development experience.

## Purpose  

When working with AI coding assistants, it can be challenging to keep track of what they're doing, especially when they work quickly or perform multiple tasks simultaneously. This extension:

- Monitors AI assistant outputs in real-time
- Visualizes tasks with intuitive color coding and progress indicators
- Provides a hierarchical view of task relationships
- Reduces cognitive load and uncertainty
- Improves the overall development experience

## Key Features

- **Real-time Task Monitoring**: Captures and visualizes AI assistant activities as they happen
- **Intuitive Visual Representation**: Color-coded indicators show task types and states
- **Activity Panel**: Hierarchical view of all AI assistant tasks
- **Timeline View**: Chronological representation of AI activities
- **Status Bar Integration**: Quick access to AI activity status
- **Customizable Notifications**: Control when and how you're notified of AI activities

## Installation

1. Download the extension package (.vsix file)
2. Open VS Code
3. Go to Extensions view (Ctrl+Shift+X)
4. Click on the "..." menu in the top-right of the Extensions view
5. Select "Install from VSIX..."
6. Choose the downloaded .vsix file
7. Restart VS Code when prompted

## Documentation

For detailed information on using the extension, please refer to the [User Guide](user-guide.md).

## Website (made by Manus AI as well)

- https://qgbjyoqn.manus.space/

## Development

### Project Structure

```
vs-code-ai-summarizer/
├── src/
│   ├── extension.ts              # Extension entry point
│   ├── extension/
│   │   └── aiSummarizer.ts       # Main extension class
│   ├── parsers/
│   │   ├── outputParser.ts       # Parses AI assistant outputs
│   │   └── aiAssistantOutputAnalyzer.ts # Analyzes outputs for task info
│   ├── taskManager/
│   │   ├── task.ts              # Task model
│   │   └── taskManager.ts       # Manages tasks and relationships
│   ├── visualization/
│   │   └── visualizationEngine.ts # Handles UI visualization
│   └── utils/
│       ├── settingsManager.ts   # Manages extension settings
│       └── testUtility.ts       # Testing utilities
├── resources/                   # Icons and other resources
├── package.json                 # Extension manifest
├── tsconfig.json                # TypeScript configuration
├── requirements.md              # Requirements analysis
├── design.md                    # Design documentation
├── test-results.md              # Test results
└── user-guide.md                # User documentation
```

### Building the Extension

1. Install dependencies:
   ```
   npm install
   ```

2. Compile the extension:
   ```
   npm run compile
   ```

3. Package the extension:
   ```
   npm run package
   ```

## License

MIT

## Acknowledgements

First quick project checking out **Manus AI**

This extension was created to enhance the experience of working with AI coding assistants and make their capabilities more accessible and understandable to developers.
