import React, { useState } from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function MobilePreview() {
  const { campaignData, activePreviewPage, setActivePreviewPage } = useCampaign();
  const { content, styling } = campaignData;
  const [selectedRating, setSelectedRating] = useState(0);

  const containerStyle = {
    backgroundColor: styling.backgroundColor,
    borderRadius: styling.borderRadius,
  };

  const titleStyle = {
    color: styling.titleColor,
    fontSize: styling.fontSize,
    fontWeight: styling.fontWeight,
  };

  const buttonStyle = {
    backgroundColor: styling.buttonColor,
    color: styling.buttonTextColor,
    width: styling.buttonWidth,
    height: styling.buttonHeight,
    borderRadius: styling.borderRadius,
  };

  return (
    /* FIX: Changed h-full justify-center to min-h-full justify-start with vertical padding */
    <div className="flex flex-col items-center justify-start min-h-full bg-slate-100 p-4 border-t lg:border-t-0 lg:border-l border-gray-200">
      
      {/* Preview Viewport Switcher Toggles */}
      <div className="flex gap-1.5 mb-6 bg-white p-1 rounded-xl border border-gray-200 shadow-xs z-10 shrink-0">
        <button
          onClick={() => setActivePreviewPage('feedback')}
          className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${activePreviewPage === 'feedback' ? 'bg-indigo-600 text-white shadow-xs' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Feedback Popup
        </button>
        <button
          onClick={() => setActivePreviewPage('thanks')}
          className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${activePreviewPage === 'thanks' ? 'bg-indigo-600 text-white shadow-xs' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Success Screen
        </button>
      </div>

      {/* Simulated Device Frame Shell - Added shrink-0 and mb-8 to preserve space */}
      <div className="w-[315px] h-[630px] bg-neutral-950 rounded-[44px] p-3 shadow-2xl relative border-4 border-neutral-800/90 flex flex-col justify-between overflow-hidden shrink-0 mb-8">
        {/* Hardware Notch Graphic Overlay */}
        <div className="w-24 h-4 bg-neutral-950 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 z-30"></div>
        
        {/* Device Interface Layout */}
        <div className="bg-slate-300 w-full h-full rounded-[34px] overflow-hidden relative flex flex-col justify-end p-3 shadow-inner">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600')" }}></div>
          
          {/* LIVE CUSTOM WIDGET INSTANCE */}
          <div style={containerStyle} className="w-full p-4 shadow-xl relative z-10 border border-black/5 animate-fade-in-up select-none">
            
            {activePreviewPage === 'feedback' ? (
              <>
                <h4 style={titleStyle} className="text-center leading-snug mb-1">{content.initialTitle}</h4>
                <p style={{ color: styling.subtitleColor }} className="text-center text-[11px] leading-normal mb-3">{content.initialSubtitle}</p>
                
                {/* Metric Star/Number Dynamic Render Block */}
                <div className="flex justify-center gap-2 mb-3.5">
                  {[1, 2, 3, 4, 5].map((idx) => {
                    const isSelected = idx <= selectedRating;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedRating(idx)}
                        style={{ color: isSelected ? styling.ratingSelectedColor : styling.ratingUnselectedColor }}
                        className="text-2xl font-bold transition-transform active:scale-90 focus:outline-none"
                      >
                        {content.ratingType === 'stars' ? '★' : idx}
                      </button>
                    );
                  })}
                </div>

                {/* Optional Tag Badges */}
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {content.options.map((opt, idx) => (
                    <span key={idx} className="bg-black/5 text-[9px] font-bold px-2 py-0.5 rounded-md border border-black/5 text-gray-700 max-w-full truncate">
                      {opt}
                    </span>
                  ))}
                </div>

                {/* Dynamic Multiline Feedback box */}
                {content.showComment && (
                  <textarea
                    placeholder="Tell us more details..."
                    className="w-full text-[11px] p-2 border border-gray-200/60 rounded-lg mb-3 bg-white/70 backdrop-blur-xs placeholder-gray-400 font-medium resize-none focus:outline-none"
                    rows={2}
                    disabled
                  />
                )}

                <button style={buttonStyle} className="text-xs font-bold shadow-xs flex items-center justify-center transition-opacity hover:opacity-95">
                  {content.submitText}
                </button>
              </>
            ) : (
              <div className="text-center flex flex-col items-center py-2">
                {content.thankYouMedia ? (
                  <img src={content.thankYouMedia} alt="Media Graphic" className="w-14 h-14 object-cover rounded-xl mb-3 border border-black/5" />
                ) : (
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 border border-emerald-100 text-lg font-bold mb-3">✓</div>
                )}
                <h4 style={titleStyle} className="leading-snug mb-1">{content.thankYouTitle}</h4>
                <p style={{ color: styling.subtitleColor }} className="text-[11px] leading-normal mb-4">{content.thankYouSubtitle}</p>
                
                <button style={buttonStyle} className="text-xs font-bold shadow-xs flex items-center justify-center">
                  {content.thankYouButtonText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}