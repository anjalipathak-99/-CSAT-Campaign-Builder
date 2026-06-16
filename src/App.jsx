import React, { useState } from 'react';
import { CampaignProvider } from './Context/CampaignContext';
import ContentTab from './Components/ContentTab';
import StylingTab from './Components/StylingTab';
import MobilePreview from './Components/MobilePreview';

function App() {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <CampaignProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col antialiased">
        {/* Top Navigation Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm z-10 shrink-0 sticky top-0">
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
        {/* FIX: Allows the entire grid system to adapt and flow naturally if height constraints break */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-6 max-w-[1600px] w-full mx-auto items-start">
          
          {/* Left Column: Configuration Dashboard Panels */}
          <section className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden lg:sticky lg:top-[80px]">
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

            {/* Configurator Panels Dynamic Content Area */}
            {/* FIX: Handles scrolling seamlessly inside the settings panel context */}
            <div className="p-6 overflow-y-auto max-h-none lg:max-h-[calc(100vh-160px)] min-h-0">
              {activeTab === 'content' ? <ContentTab /> : <StylingTab />}
            </div>
          </section>

          {/* Right Column: Live Mockup Simulator */}
          {/* FIX: Changed overflow properties to auto-scroll with fallback alignment padding to avoid cutoff clipping */}
          <section className="lg:col-span-5 bg-gray-900 rounded-xl p-6 shadow-inner flex flex-col items-center justify-start overflow-y-auto max-h-none lg:max-h-[calc(100vh-160px)] lg:sticky lg:top-[80px] min-h-[660px]">
            <div className="text-center mb-4 shrink-0">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold pt-2">
                Interactive Mobile Preview
              </p>
            </div>
            <div className="w-full flex justify-center items-center pb-4">
              <MobilePreview />
            </div>
          </section>

        </main>
      </div>
    </CampaignProvider>
  );
}

export default App;
