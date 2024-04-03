import React, { useState } from 'react';
import { TabsNav } from './TabsNav';
import { Content } from './Content';
import './Tabs.css';
import { TabsData } from '../types';

interface IOwnProps {
  data: TabsData[];
  defaultTab?: number
}

export const Tabs = ({data, defaultTab = 0}: IOwnProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);

  const onClickTabHandler = (index: number) => {
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
