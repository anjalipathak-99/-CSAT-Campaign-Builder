import React from 'react';
import { CampaignProvider, useCampaign } from './context/CampaignContext';
import ContentTab from './components/ContentTab';
import StylingTab from './components/StylingTab';
import MobilePreview from './components/MobilePreview';

function DashboardLayout() {
  const { activeTab, setActiveTab } = useCampaign();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none">
      {/* Header Panel */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-lg">A</div>
          <div>
            <h1 className="text-base font-bold text-gray-900 leading-tight">FeedbackFlow</h1>
            <p className="text-xs text-gray-500">CSAT Campaign Builder</p>
          </div>
        </div>
      </header>

      {/* Main Multi-Column Split workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* Left Hand Configuration Workspace */}
        <main className="lg:col-span-7 p-6 flex flex-col space-y-4 max-h-[calc(100vh-68px)] overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('content')}
              className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'content'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              📝 Content Fields
            </button>
            <button
              onClick={() => setActiveTab('styling')}
              className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'styling'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              🎨 Interface Layout & Styling
            </button>
          </div>

          <div className="flex-1 overflow-hidden">
            {activeTab === 'content' ? <ContentTab /> : <StylingTab />}
          </div>
        </main>

        {/* FIX: Right Hand Live Smartphone Mirror Viewport with Isolated Scroll bounds */}
        <aside className="lg:col-span-5 max-h-[calc(100vh-68px)] overflow-y-auto py-8 bg-slate-100 customs-scrollbar">
          <MobilePreview />
        </aside>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <CampaignProvider>
      <DashboardLayout />
    </CampaignProvider>
  );
}