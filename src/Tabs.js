import React, { useState } from 'react';
import './Tabs.css';

export const Tab = ({active, title, onClick}) => {
  const containerClass = 'tab-wrapper';
  const titleClass = 'title';

  const isActive = active ? 'active' : '';
  return (
    <div className={`${containerClass} ${isActive}`} onClick={onClick}>
      <div className={`${titleClass} ${isActive}`}>{title}</div>
    </div>
  );
};

export const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.defaultTab || 0);

  const onClickTabHandler = (index) => {
    setActiveTab(index);
    if (props.onClick) props.onClick(index);
  };

  const tabsNav = React.Children.map(props.children, (child, index) => {
    const onClick = () => onClickTabHandler(index);
    const active = activeTab === index;
    return React.cloneElement(child, { onClick, active });
  });

  const content = React.Children.toArray(props.children)[activeTab].props.children;

  return (
    <div className='tabs-container'>
      <div className='tabs-nav'>
        {tabsNav}
      </div>
      <div className='content'>
        {content}
      </div>
    </div>
  );
};

export default Tabs;
