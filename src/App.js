import React from 'react';
import Tabs from './components/Tabs.js';
import { tabsData } from './data/index.js';

function App() {
  return (
    <Tabs data={tabsData} />
  );
}

export default App;
