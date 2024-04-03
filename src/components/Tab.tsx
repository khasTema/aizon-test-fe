import React from "react";
import { containerClass, titleClass } from '../consts'

interface IOwnProps {
  active: boolean;
  title: string;
  onClick: () => void;
}

export const Tab = ({active, title, onClick}: IOwnProps) => {
    const isActive: string = active ? 'active' : '';
    return (
      <div className={`${containerClass} ${isActive}`} onClick={onClick}>
        <div className={`${titleClass} ${isActive}`}>{title}</div>
      </div>
    );
  };