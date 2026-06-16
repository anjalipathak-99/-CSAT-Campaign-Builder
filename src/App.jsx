import React, { useState } from 'react';
import { CampaignProvider } from './Context/CampaignContext';
import ContentTab from './components/ContentTab';
import StylingTab from './components/StylingTab';
import MobilePreview from './components/MobilePreview';

function App() {
  const [activeTab, setActiveTab] = useState('content'); // 'content' or 'styling'

  return (
    <CampaignProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Top Navigation Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold text-xl tracking-tight">
              FF
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FeedbackFlow</h1>
              <p className="text-xs text-gray-500">CSAT Campaign Builder & Simulator</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              ● Live Preview Sandbox
            </span>
          </div>
        </header>

        {/* Main Workspace Layout */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-[1600px] w-full mx-auto">
          
          {/* Left Column: Configuration Dashboard Panels (7 cols) */}
          <section className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
            {/* Tab Controller Buttons */}
            <div className="flex border-b border-gray-200 bg-gray-50/50">
              <button
                onClick={() => setActiveTab('content')}
                className={`flex-1 py-4 px-6 text-center font-medium text-sm border-b-2 transition-all ${
                  activeTab === 'content'
                    ? 'border-indigo-600 text-indigo-600 bg-white font-semibold'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                📝 Content & Layout Settings
              </button>
              <button
                onClick={() => setActiveTab('styling')}
                className={`flex-1 py-4 px-6 text-center font-medium text-sm border-b-2 transition-all ${
                  activeTab === 'styling'
                    ? 'border-indigo-600 text-indigo-600 bg-white font-semibold'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                🎨 Branding & Visual Styling
              </button>
            </div>

            {/* Configurator Panels Dynamic Content Mapping */}
            <div className="flex-1 p-6 overflow-y-auto max-h-[calc(100vh-240px)]">
              {activeTab === 'content' ? <ContentTab /> : <StylingTab />}
            </div>
          </section>

          {/* Right Column: Live Mockup Simulator (5 cols) */}
          <section className="lg:col-span-5 bg-gray-900 rounded-xl p-6 shadow-inner flex items-center justify-center min-h-[600px] lg:min-h-0">
            <div className="w-full max-w-sm">
              <div className="text-center mb-4">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Interactive Mobile Preview
                </p>
              </div>
              <MobilePreview />
            </div>
          </section>

        </main>
      </div>
    </CampaignProvider>
  );
}

export default App;
