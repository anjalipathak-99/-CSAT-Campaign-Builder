import React, { useState } from 'react';
import { useCampaign } from '../Context/CampaignContext';

function ContentTab() {
  const { campaignData, updateCampaign } = useCampaign();
  const [newBadge, setNewBadge] = useState('');

  const addBadge = (e) => {
    e.preventDefault();
    if (!newBadge.trim()) return;
    updateCampaign('badges', [...campaignData.badges, newBadge.trim()]);
    setNewBadge('');
  };

  const removeBadge = (indexToRemove) => {
    updateCampaign(
      'badges',
      campaignData.badges.filter((_, i) => i !== indexToRemove)
    );
  };

  return (
    <div className="space-y-6">
      {/* Screen View Mode Switcher */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Simulated Screen Layout View</label>
        <div className="grid grid-cols-2 gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            type="button"
            onClick={() => updateCampaign('currentScreen', 'feedback')}
            className={`py-2 text-xs font-medium rounded-md transition ${
              campaignData.currentScreen === 'feedback' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            1. Feedback Window
          </button>
          <button
            type="button"
            onClick={() => updateCampaign('currentScreen', 'success')}
            className={`py-2 text-xs font-medium rounded-md transition ${
              campaignData.currentScreen === 'success' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            2. Success State
          </button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {campaignData.currentScreen === 'feedback' ? (
        <>
          {/* Feedback Setup */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Header Title</label>
            <input
              type="text"
              value={campaignData.title}
              onChange={(e) => updateCampaign('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub-header Copy</label>
            <textarea
              rows="2"
              value={campaignData.subtitle}
              onChange={(e) => updateCampaign('subtitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating Scale Engine</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="ratingType"
                  checked={campaignData.ratingType === 'stars'}
                  onChange={() => updateCampaign('ratingType', 'stars')}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span>Star Ratings (★)</span>
              </label>
              <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="ratingType"
                  checked={campaignData.ratingType === 'numeric'}
                  onChange={() => updateCampaign('ratingType', 'numeric')}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span>Numerical Points (1-5)</span>
              </label>
            </div>
          </div>

          {/* Badges system */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interactive Feedback Pills</label>
            <form onSubmit={addBadge} className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="e.g., Support, Quality..."
                value={newBadge}
                onChange={(e) => setNewBadge(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button type="submit" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition">
                Add Tag
              </button>
            </form>
            <div className="flex flex-wrap gap-1.5">
              {campaignData.badges.map((badge, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                  {badge}
                  <button type="button" onClick={() => removeBadge(idx)} className="text-gray-400 hover:text-red-500 font-bold ml-1">
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Success Screen Config */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Success Title Message</label>
            <input
              type="text"
              value={campaignData.successTitle}
              onChange={(e) => updateCampaign('successTitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Success Subtitle Message</label>
            <textarea
              rows="3"
              value={campaignData.successSubtitle}
              onChange={(e) => updateCampaign('successSubtitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ContentTab;
