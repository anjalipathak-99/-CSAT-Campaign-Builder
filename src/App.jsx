import React, { useState } from 'react';
import { CampaignProvider } from './Context/CampaignContext';
import ContentTab from './Components/ContentTab';
import StylingTab from './Components/StylingTab';
import MobilePreview from './Components/MobilePreview';

function App() {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <CampaignProvider>
      <div className="h-screen bg-gray-50 flex flex-col antialiased overflow-hidden">
        
        {/* Top Navigation Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm z-10 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold text-lg tracking-tight leading-none">
              FF
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">FeedbackFlow</h1>
              <p className="text-[10px] text-gray-500">CSAT Campaign Builder & Simulator</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              ● Live Preview Sandbox
            </span>
          </div>
        </header>

        {/* Main Workspace Layout */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6 max-w-[1600px] w-full mx-auto min-h-0 overflow-y-auto lg:overflow-hidden">
          
          {/* Left Column: Configuration Dashboard Panels */}
          {/* FIXED: Set fixed max height calculated relative to screen workspace so the container bounds stay solid */}
          <section className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-auto lg:h-[calc(100vh-120px)]">
            <div className="flex border-b border-gray-200 bg-gray-50/50 shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                className={`flex-1 py-3.5 px-6 text-center font-medium text-sm border-b-2 transition-all ${
                  activeTab === 'content'
                    ? 'border-indigo-600 text-indigo-600 bg-white font-semibold'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                📝 Content & Layout Settings
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('styling')}
                className={`flex-1 py-3.5 px-6 text-center font-medium text-sm border-b-2 transition-all ${
                  activeTab === 'styling'
                    ? 'border-indigo-600 text-indigo-600 bg-white font-semibold'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                🎨 Branding & Visual Styling
              </button>
            </div>

            {/* Configurator Panels Content Area */}
            {/* FIXED: Re-added fine-tuned inner scroll functionality so long form items can be scrolled through smoothly */}
            <div className="flex-1 p-6 overflow-y-auto min-h-0 custom-scrollbar">
              {activeTab === 'content' ? <ContentTab /> : <StylingTab />}
            </div>
          </section>

          {/* Right Column: Live Mockup Simulator */}
          <section className="lg:col-span-5 bg-gray-900 rounded-xl p-6 shadow-inner flex flex-col items-center justify-start lg:h-[calc(100vh-120px)] overflow-y-auto min-h-[680px]">
            <div className="text-center mb-4 shrink-0">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold pt-2">
                Interactive Mobile Preview
              </p>
            </div>
            <div className="w-full flex justify-center items-center my-auto">
              <MobilePreview />
            </div>
          </section>

        </main>
      </div>
    </CampaignProvider>
  );
}

export default App;
