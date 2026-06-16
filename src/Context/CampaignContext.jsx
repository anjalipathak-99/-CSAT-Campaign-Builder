import React, { createContext, useState, useContext } from 'react';

const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('content');
  const [activePreviewPage, setActivePreviewPage] = useState('feedback');
  
  const [campaignData, setCampaignData] = useState({
    content: {
      initialTitle: "How was your experience?",
      initialSubtitle: "We would love to hear your feedback.",
      ratingType: "stars", 
      options: ["Great Service", "Easy to use", "Fast Delivery"],
      showComment: true,
      submitText: "Submit Feedback",
      thankYouMedia: null,
      thankYouTitle: "Thank You!",
      thankYouSubtitle: "Your feedback helps us improve.",
      thankYouButtonText: "Close"
    },
    styling: {
      backgroundColor: "#ffffff",
      titleColor: "#1a1a1a",
      subtitleColor: "#666666",
      buttonColor: "#4f46e5",
      buttonTextColor: "#ffffff",
      fontSize: "16px",
      fontWeight: "500",
      borderRadius: "12px",
      buttonWidth: "100%",
      buttonHeight: "44px",
      ratingSelectedColor: "#eab308",
      ratingUnselectedColor: "#e5e7eb"
    }
  });

  const updateContent = (key, value) => {
    setCampaignData(prev => ({
      ...prev,
      content: { ...prev.content, [key]: value }
    }));
  };

  const updateStyling = (key, value) => {
    setCampaignData(prev => ({
      ...prev,
      styling: { ...prev.styling, [key]: value }
    }));
  };

  return (
    <CampaignContext.Provider value={{ 
      campaignData, 
      updateContent, 
      updateStyling, 
      activeTab, 
      setActiveTab,
      activePreviewPage,
      setActivePreviewPage
    }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaign = () => useContext(CampaignContext);