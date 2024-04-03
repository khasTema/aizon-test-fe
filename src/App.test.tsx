import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import { tabsData } from './data';



describe('App Component Tests', () => {
  test('test_app_renders_tabs_with_correct_data', async () => {
    await act(async () => {
      render(<App />);
      
      await new Promise(resolve => setTimeout(resolve, 3000));
    });
  
    expect(screen.getByText(tabsData[0].title)).toBeInTheDocument();
    expect(screen.getByText(tabsData[0].content)).toBeInTheDocument();
  });

  test('test_app_shows_loading_state', () => {
    render(<App />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
});