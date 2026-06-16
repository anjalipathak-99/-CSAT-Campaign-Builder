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
    <div className="mx-auto w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-2xl border-4 border-gray-800 relative flex flex-col overflow-hidden">
      {/* Phone Screen Top Speaker/Notch Notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-28 bg-black rounded-b-xl z-20"></div>

      {/* Simulated Background Content Area */}
      <div className="flex-1 bg-gradient-to-b from-slate-700 to-slate-900 rounded-[32px] p-4 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col p-4 pt-8 text-slate-500 text-[10px] space-y-2 opacity-20 select-none">
          <div className="h-3 bg-slate-400 rounded w-2/3"></div>
          <div className="h-16 bg-slate-400 rounded w-full"></div>
          <div className="h-20 bg-slate-400 rounded w-full"></div>
        </div>

        {/* CSAT Campaign Widget Modal Element */}
        <div style={widgetStyles} className="p-5 shadow-2xl border border-white/10 transition-all duration-300 z-10 w-full">
          {campaignData.currentScreen === 'feedback' ? (
            <div className="text-center">
              <h4 className="text-base font-bold leading-tight mb-1">{campaignData.title || 'Untitled Campaign'}</h4>
              <p className="text-xs opacity-75 mb-4 leading-relaxed">{campaignData.subtitle}</p>

              {/* Dynamic Ratings Layout Render Engine */}
              <div className="flex justify-center items-center gap-2 mb-4">
                {campaignData.ratingType === 'stars'
                  ? [1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setSelectedRating(star)}
                        className={`text-2xl transition ${star <= selectedRating ? 'text-amber-400 scale-110' : 'text-gray-300 opacity-60'}`}
                      >
                        ★
                      </button>
                    ))
                  : [1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedRating(num)}
                        className={`w-7 h-7 text-xs font-bold rounded-full border transition flex items-center justify-center ${
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
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {campaignData.badges.map((badge, index) => {
                    const isSelected = activeBadges.includes(badge);
                    return (
                      <button
                        key={index}
                        onClick={() => toggleBadge(badge)}
                        className={`px-2 py-1 text-[10px] font-medium rounded-full border transition ${
                          isSelected ? 'bg-gray-800 text-white border-gray-800' : 'bg-transparent opacity-60 border-current'
                        }`}
                      >
                        {badge}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Action Trigger Buttons */}
              <button
                type="button"
                className="w-full py-2.5 text-xs font-semibold shadow-sm transition active:scale-[0.99]"
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
            <div className="text-center py-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                ✓
              </div>
              <h4 className="text-base font-bold leading-tight mb-1">{campaignData.successTitle}</h4>
              <p className="text-xs opacity-75 leading-relaxed">{campaignData.successSubtitle}</p>
            </div>
          )}
        </div>
      </div>

      {/* Phone Screen Home Indicator bar */}
      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-white/40 rounded-full"></div>
    </div>
  );
}

export default MobilePreview;
