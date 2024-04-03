import React from 'react';
import Tabs from './components/Tabs';
import { useFetchedTabs } from './hooks/useFetchedTabs';

function App() {
  const { data, isLoading } = useFetchedTabs()
  const hasData: boolean = data.length > 0
  if (isLoading) return <h3>Loading...</h3>
  if (!hasData) return <h2>No tabs available</h2>
  return (
    <Tabs data={data} />
  );
}

export default App;
