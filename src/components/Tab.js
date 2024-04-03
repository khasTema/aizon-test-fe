import React from "react";

const containerClass = 'tab-wrapper';
const titleClass = 'title';

export const Tab = ({active, title, onClick}) => {
    const isActive = active ? 'active' : '';
    return (
      <div className={`${containerClass} ${isActive}`} onClick={onClick}>
        <div className={`${titleClass} ${isActive}`}>{title}</div>
      </div>
    );
  };