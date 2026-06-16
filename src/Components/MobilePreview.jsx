import React, { useState } from 'react';
import { useCampaign } from '../Context/CampaignContext';

function MobilePreview() {
  const { campaignData } = useCampaign();
  const [selectedRating, setSelectedRating] = useState(0);
  const [activeBadges, setActiveBadges] = useState([]);

  const toggleBadge = (badge) => {
    setActiveBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );
  };

  const widgetStyles = {
    backgroundColor: campaignData.backgroundColor,
    color: campaignData.textColor,
    borderRadius: campaignData.borderRadius,
  };

  return (
    <div className="mx-auto w-[280px] h-[540px] bg-black rounded-[40px] p-3 shadow-2xl border-4 border-gray-800 relative flex flex-col overflow-hidden select-none">
      {/* Phone Screen Top Speaker/Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-24 bg-black rounded-b-xl z-20"></div>

      {/* Simulated Background Content Area */}
      {/* FIX 1: Changed 'justify-end' to 'justify-center' so the widget stays perfectly centered inside the viewport */}
      <div className="flex-1 bg-gradient-to-b from-slate-700 to-slate-900 rounded-[32px] p-3 flex flex-col justify-center relative overflow-y-auto scrollbar-none [webkit-overflow-scrolling:touch]">
        
        {/* Mock Abstract App Layout in the Background */}
        <div className="absolute inset-0 flex flex-col p-4 pt-8 text-slate-500 text-[10px] space-y-2 opacity-10 select-none pointer-events-none">
          <div className="h-3 bg-slate-400 rounded w-2/3"></div>
          <div className="h-16 bg-slate-400 rounded w-full"></div>
        </div>

        {/* CSAT Campaign Widget Modal Element */}
        {/* FIX 2: Reduced internal padding slightly (p-3.5) to reclaim screen space for structural buttons */}
        <div 
          style={widgetStyles} 
          className="p-3.5 shadow-2xl border border-white/10 transition-all duration-300 z-10 w-full"
        >
          {campaignData.currentScreen === 'feedback' ? (
            <div className="text-center">
              <h4 className="text-xs font-bold leading-tight mb-1 break-words">
                {campaignData.title || 'Untitled Campaign'}
              </h4>
              <p className="text-[10px] opacity-75 mb-2.5 leading-relaxed break-words">
                {campaignData.subtitle}
              </p>

              {/* Dynamic Ratings Layout Render Engine */}
              <div className="flex justify-center items-center flex-wrap gap-1.5 mb-2.5">
                {campaignData.ratingType === 'stars'
                  ? [1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setSelectedRating(star)}
                        className={`text-xl transition-all duration-150 transform active:scale-95 ${
                          star <= selectedRating ? 'text-amber-400 scale-110' : 'text-gray-300 opacity-60'
                        }`}
                      >
                        ★
                      </button>
                    ))
                  : [1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setSelectedRating(num)}
                        className={`w-5 h-5 text-[9px] font-bold rounded-full border transition-all duration-150 transform active:scale-95 flex items-center justify-center ${
                          num === selectedRating
                            ? 'bg-indigo-600 border-indigo-600 text-white scale-105'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                        style={num === selectedRating ? { backgroundColor: campaignData.buttonColor, color: campaignData.buttonTextColor } : {}}
                      >
                        {num}
                      </button>
                    ))}
              </div>

              {/* Selection Feedback Tag Badges Selection Array Layout */}
              {campaignData.badges.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1 mb-3">
                  {campaignData.badges.map((badge, index) => {
                    const isSelected = activeBadges.includes(badge);
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => toggleBadge(badge)}
                        className={`px-1.5 py-0.5 text-[8px] font-medium rounded-full border transition-all break-all ${
                          isSelected ? 'bg-gray-800 text-white border-gray-800' : 'bg-transparent opacity-60 border-current'
                        }`}
                      >
                        {badge}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Action Trigger Submit Button */}
              <button
                type="button"
                className="w-full py-2 text-[10px] font-semibold shadow-sm transition-all transform active:scale-[0.98] block"
                style={{
                  backgroundColor: campaignData.buttonColor,
                  color: campaignData.buttonTextColor,
                  borderRadius: `calc(${campaignData.borderRadius} / 1.5)`,
                }}
              >
                Submit Feedback
              </button>
            </div>
          ) : (
            /* Thank you confirmation state view layout */
            <div className="text-center py-3">
              <div className="w-7 h-7 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">
                ✓
              </div>
              <h4 className="text-xs font-bold leading-tight mb-1 break-words">{campaignData.successTitle}</h4>
              <p className="text-[10px] opacity-75 leading-relaxed break-words">{campaignData.successSubtitle}</p>
            </div>
          )}
        </div>
      </div>

      {/* Phone Screen Home Indicator bar */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-white/30 rounded-full z-20"></div>
    </div>
  );
}

export default MobilePreview;
