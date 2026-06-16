import React from 'react';
import { useCampaign } from '../Context/CampaignContext';

function StylingTab() {
  const { campaignData, updateCampaign } = useCampaign();

  const colorFields = [
    { label: 'Widget Background Fill', key: 'backgroundColor' },
    { label: 'Typography / Text Fill', key: 'textColor' },
    { label: 'Primary Action Button Color', key: 'buttonColor' },
    { label: 'Action Button Label Color', key: 'buttonTextColor' },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-2">Palette Hex Swatches</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colorFields.map((field) => (
          <div key={field.key} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
            <label className="block text-xs font-medium text-gray-600 mb-1">{field.label}</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={campaignData[field.key]}
                onChange={(e) => updateCampaign(field.key, e.target.value)}
                className="w-8 h-8 rounded cursor-pointer border border-gray-300 bg-transparent"
              />
              <input
                type="text"
                maxLength="7"
                value={campaignData[field.key]}
                onChange={(e) => updateCampaign(field.key, e.target.value)}
                className="flex-1 px-2 py-1 text-xs font-mono uppercase border border-gray-300 rounded focus:outline-none"
              />
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Geometry and Sizing Layout Settings */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Container Edge Profile: <span className="font-mono text-indigo-600 font-bold">{campaignData.borderRadius}</span>
        </label>
        <div className="grid grid-cols-4 gap-2">
          {['0px', '8px', '12px', '24px'].map((radius) => (
            <button
              key={radius}
              type="button"
              onClick={() => updateCampaign('borderRadius', radius)}
              className={`py-2 text-xs font-medium rounded-md border transition ${
                campaignData.borderRadius === radius
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {radius === '0px' ? 'Sharp' : radius === '8px' ? 'Slight' : radius === '12px' ? 'Medium' : 'Round'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StylingTab;
