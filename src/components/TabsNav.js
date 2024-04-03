import React from 'react'
import { Tab } from './Tab'
import { tabsData as data } from '../data'

export const TabsNav = ({onClick, activeTab}) => {
  return (
    <div className='tabs-nav'>
        {
          data.map((tab, index) => <Tab 
                                      key={tab.title} 
                                      title={tab.title} 
                                      onClick={() => onClick(index)}
                                      active={index === activeTab} 
                                    />
                                  )
        }
      </div>
  )
}
