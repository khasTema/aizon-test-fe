import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabsNav } from '../TabsNav';
import { tabsData } from '../../data';

describe('TabsNav Component', () => {
  test('test_tabsNav_renders_correct_number_of_tabs', () => {
    render(<TabsNav onClick={() => {}} activeTab={0} />);
    const tabs = screen.getAllByTestId('tab');
    expect(tabs).toHaveLength(tabsData.length);
  });

  test('test_tabsNav_passes_correct_props_to_tabs', () => {
    const mockOnClick = jest.fn();
    render(<TabsNav onClick={mockOnClick} activeTab={1} />);
    const secondTab = screen.getAllByTestId('tab')[1];
    userEvent.click(secondTab);
    expect(mockOnClick).toHaveBeenCalledWith(1);
  });

  test('test_tabsNav_correctly_sets_active_tab', () => {
    const { container } = render(<TabsNav onClick={() => {}} activeTab={2} />);
    const activeTab = container.querySelector('.active');
    expect(activeTab).toHaveTextContent(tabsData[2].title);
  });
});