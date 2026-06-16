import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function StylingTab() {
  const { campaignData, updateStyling } = useCampaign();
  const { styling } = campaignData;

  const colorPickers = [
    { label: 'Widget Background', key: 'backgroundColor' },
    { label: 'Primary Title', key: 'titleColor' },
    { label: 'Secondary Subtitle', key: 'subtitleColor' },
    { label: 'Action Button Fill', key: 'buttonColor' },
    { label: 'Action Button Label', key: 'buttonTextColor' },
    { label: 'Metric Active State', key: 'ratingSelectedColor' },
    { label: 'Metric Inactive State', key: 'ratingUnselectedColor' },
  ];

  return (
    <div className="space-y-6 max-h-[calc(100vh-160px)] overflow-y-auto pr-2 pb-6">
      {/* CORES & PALETTE SYSTEMS */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
        <h3 className="font-bold text-gray-800 border-b pb-3 mb-4 text-xs uppercase tracking-wider">Color Architecture</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {colorPickers.map((picker) => (
            <div key={picker.key} className="flex flex-col space-y-1 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
              <label className="text-xs font-semibold text-gray-600">{picker.label}</label>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="color"
                  value={styling[picker.key]}
                  onChange={(e) => updateStyling(picker.key, e.target.value)}
                  className="w-8 h-8 rounded-md border border-gray-300 cursor-pointer overflow-hidden p-0"
                />
                <input 
                  type="text" 
                  value={styling[picker.key]} 
                  onChange={(e) => updateStyling(picker.key, e.target.value)}
                  className="text-xs border border-gray-200 p-1 rounded-md w-20 text-center uppercase font-mono bg-white focus:outline-none" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TYPOGRAPHY, BUTTONS & GEOMETRIC RADII */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="font-bold text-gray-800 border-b pb-2 text-xs uppercase tracking-wider">Geometry & Typography</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Title Scaled Size</label>
            <select
              value={styling.fontSize}
              onChange={(e) => updateStyling('fontSize', e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg text-sm bg-white outline-none"
            >
              <option value="14px">Small (14px)</option>
              <option value="16px">Regular (16px)</option>
              <option value="18px">Medium (18px)</option>
              <option value="22px">Large (22px)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Title Structural Weight</label>
            <select
              value={styling.fontWeight}
              onChange={(e) => updateStyling('fontWeight', e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg text-sm bg-white outline-none"
            >
              <option value="40px">Book (400)</option>
              <option value="500">Medium (500)</option>
              <option value="700">Bold (700)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Container Corner Radius</label>
            <select
              value={styling.borderRadius}
              onChange={(e) => updateStyling('borderRadius', e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg text-sm bg-white outline-none"
            >
              <option value="0px">Sharp (0px)</option>
              <option value="6px">Subtle (6px)</option>
              <option value="12px">Standard (12px)</option>
              <option value="20px">Curved (20px)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Action Heights</label>
            <input
              type="text"
              value={styling.buttonHeight}
              onChange={(e) => updateStyling('buttonHeight', e.target.value)}
              className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none"
              placeholder="44px"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Action Width Layout Bounds</label>
          <input
            type="text"
            value={styling.buttonWidth}
            onChange={(e) => updateStyling('buttonWidth', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm outline-none"
            placeholder="100%"
          />
        </div>
      </div>
    </div>
  );
}