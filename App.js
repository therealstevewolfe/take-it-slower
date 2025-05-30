"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const Header_1 = __importDefault(require("./components/Header"));
const Hero_1 = __importDefault(require("./components/Hero"));
const Features_1 = __importDefault(require("./components/Features"));
const HowItWorks_1 = __importDefault(require("./components/HowItWorks"));
const Installation_1 = __importDefault(require("./components/Installation"));
const Configuration_1 = __importDefault(require("./components/Configuration"));
const FAQ_1 = __importDefault(require("./components/FAQ"));
const Footer_1 = __importDefault(require("./components/Footer"));
const DemoSection_1 = __importDefault(require("./components/DemoSection"));
const DocsViewer_1 = __importDefault(require("./components/DocsViewer"));
function App() {
    return (<div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Header_1.default />
      <main>
        <Hero_1.default />
        <div className="container mx-auto px-4 py-8">
          <Features_1.default />
          <DemoSection_1.default />
          <HowItWorks_1.default />
          <DocsViewer_1.default />
          <Installation_1.default />
          <Configuration_1.default />
          <FAQ_1.default />
        </div>
      </main>
      <Footer_1.default />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map