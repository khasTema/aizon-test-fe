import React, { useState } from 'react';
import { TabsNav } from './TabsNav';
import { Content } from './Content';
import './Tabs.css';

export const Tabs = ({data, defaultTab = 0}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  const onClickTabHandler = (index) => {
    setActiveTab(index);
  };

  const shownContent = data[activeTab].content

  return (
    <div className='tabs-container'>
      <TabsNav  onClick={onClickTabHandler} activeTab={activeTab}/>
      <Content shownContent={shownContent} />
    </div>
  );
};

export default Tabs;
