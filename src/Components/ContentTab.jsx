import React from 'react';
import { useCampaign } from '../context/CampaignContext';

export default function ContentTab() {
  const { campaignData, updateContent } = useCampaign();
  const { content } = campaignData;

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...content.options];
    updatedOptions[index] = value;
    updateContent('options', updatedOptions);
  };

  const addOption = () => {
    updateContent('options', [...content.options, 'New Badge']);
  };

  const deleteOption = (index) => {
    updateContent('options', content.options.filter((_, i) => i !== index));
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateContent('thankYouMedia', url);
    }
  };

  return (
    <div className="space-y-6 max-h-[calc(100vh-160px)] overflow-y-auto pr-2 pb-6">
      {/* INITIAL FEEDBACK */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="font-bold text-gray-800 border-b pb-2 text-xs uppercase tracking-wider">Initial Feedback Screen</h3>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Popup Title</label>
          <input
            type="text"
            value={content.initialTitle}
            onChange={(e) => updateContent('initialTitle', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Popup Subtitle</label>
          <input
            type="text"
            value={content.initialSubtitle}
            onChange={(e) => updateContent('initialSubtitle', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition"
          />
        </div>
      </div>

      {/* INTERACTIVE COMPONENT CONFIGS */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="font-bold text-gray-800 border-b pb-2 text-xs uppercase tracking-wider">Interactive Elements</h3>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Rating Display Style</label>
          <select
            value={content.ratingType}
            onChange={(e) => updateContent('ratingType', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition"
          >
            <option value="stars">Stars (★)</option>
            <option value="numbers">Numbers (1-5)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Feedback Tags</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {content.options.map((option, index) => (
              <div key={index} className="flex gap-1.5 items-center bg-gray-50 p-1.5 rounded-lg border border-gray-200">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  className="w-full border-0 bg-transparent px-1 py-0.5 text-xs font-medium focus:ring-0 outline-none"
                />
                <button
                  onClick={() => deleteOption(index)}
                  className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1 rounded-md transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addOption}
            className="mt-3 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-bold px-3 py-2 rounded-lg transition"
          >
            + Add Option Badge
          </button>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-600">Provide Comment Input</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={content.showComment}
              onChange={(e) => updateContent('showComment', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Submit Trigger Button Text</label>
          <input
            type="text"
            value={content.submitText}
            onChange={(e) => updateContent('submitText', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition"
          />
        </div>
      </div>

      {/* THANK YOU SCREEN OPTIONS */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="font-bold text-gray-800 border-b pb-2 text-xs uppercase tracking-wider">Thank You Screen</h3>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Banner Artwork</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleMediaUpload}
            className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Success Title</label>
          <input
            type="text"
            value={content.thankYouTitle}
            onChange={(e) => updateContent('thankYouTitle', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Success Message Description</label>
          <input
            type="text"
            value={content.thankYouSubtitle}
            onChange={(e) => updateContent('thankYouSubtitle', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Dismiss Control Button Text</label>
          <input
            type="text"
            value={content.thankYouButtonText}
            onChange={(e) => updateContent('thankYouButtonText', e.target.value)}
            className="w-full border border-gray-300 p-2.5 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition"
          />
        </div>
      </div>
    </div>
  );
}