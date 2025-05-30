import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Installation from './components/Installation'
import Configuration from './components/Configuration'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import DemoSection from './components/DemoSection'
import DocsViewer from './components/DocsViewer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <Features />
          <DemoSection />
          <HowItWorks />
          <DocsViewer />
          <Installation />
          <Configuration />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
