import React, { createContext, useContext, useState } from 'react';

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaignData, setCampaignData] = useState({
    title: 'How happy are you with our service?',
    subtitle: 'Your feedback helps us improve daily.',
    ratingType: 'stars', // 'stars' or 'numeric'
    badges: ['Fast Delivery', 'Great Quality', 'Friendly Support'],
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    buttonColor: '#4f46e5',
    buttonTextColor: '#ffffff',
    borderRadius: '12px',
    currentScreen: 'feedback', // 'feedback' or 'success'
    successTitle: 'Thank You!',
    successSubtitle: 'We appreciate your valuable feedback.',
  });

  const updateCampaign = (key, value) => {
    setCampaignData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <CampaignContext.Provider value={{ campaignData, updateCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaign = () => useContext(CampaignContext);
