import React from 'react';
import Tabs from './components/Tabs';
import { tabsData } from './data';

function App() {
  return (
    <Tabs data={tabsData} />
  );
}

export default App;
