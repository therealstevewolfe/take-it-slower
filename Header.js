"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    return (<header className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          <span className="text-xl font-bold">AI Summarizer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How It Works</a>
          <a href="#installation" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Installation</a>
          <a href="#configuration" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Configuration</a>
          <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">FAQ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-700 dark:text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>)}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (<nav className="md:hidden bg-white dark:bg-slate-800 px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-3">
            <a href="#features" className="py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </a>
            <a href="#installation" className="py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Installation
            </a>
            <a href="#configuration" className="py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Configuration
            </a>
            <a href="#faq" className="py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
          </div>
        </nav>)}
    </header>);
};
exports.default = Header;
//# sourceMappingURL=Header.js.map