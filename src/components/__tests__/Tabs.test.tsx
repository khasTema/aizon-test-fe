import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from '../Tabs';
import { TabsData } from '../../types';

describe('Tabs Component', () => {
  const tabsData: TabsData[] = [
    { title: 'tab 1', content: 'Content 1' },
    { title: 'tab 2', content: 'Content 2' },
    { title: 'tab 3', content: 'Content 3' },
  ];

  test('test_tabs_component_renders_correct_content', () => {
    const { getByText } = render(<Tabs data={tabsData} defaultTab={1} />);
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  test('test_tabs_component_updates_active_tab_on_click', () => {
    const { getByText } = render(<Tabs data={tabsData} />);
    fireEvent.click(getByText('tab 2'));
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  test('test_tabs_component_renders_default_tab_on_mount', () => {
    const { getByText } = render(<Tabs data={tabsData} defaultTab={2} />);
    expect(getByText('Content 3')).toBeInTheDocument();
  });
});