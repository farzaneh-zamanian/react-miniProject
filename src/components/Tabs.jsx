import React, { useState, useEffect } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const storedTab = localStorage.getItem("activeTab");
    return storedTab || "tab1";
  });

  const tabs = [
    { id: "tab1", label: "Tab 1", content: "first item" },
    { id: "tab2", label: "Tab 2", content: "second item" },
    { id: "tab3", label: "Tab 3", content: "third item" },
    { id: "tab4", label: "Tab 4", content: "fourth item" },
  ];

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabContainer">
      <ul className="tabs">
        {tabs.map((tab) => (
          <li key={tab.id} className={activeTab === tab.id ? "active" : ""}>
            <a onClick={() => handleTabClick(tab.id)}>{tab.label}</a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </div>
  );
};

export default Tab;