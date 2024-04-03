import React from 'react';
import Tabs, { Tab } from './Tabs.js';

const tabsArr = [
  {
    title: 'tab 1',
    content: 'Content of tab 1'
  },
  {
    title: 'tab 2',
    content: 'Content of tab 2'
  }
]
function App() {
  return (
    <Tabs>
      {/* <Tab title='tab 1'>Content of tab 1</Tab>
      <Tab title='tab 2'>Content of tab 2</Tab> */}
      {
        tabsArr.map(tab => <Tab 
                              key={tab.title} 
                              title={tab.title} 
                              content={tab.content} 
                            />
                        )
        }
    </Tabs>
  );
}

export default App;
