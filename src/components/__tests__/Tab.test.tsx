import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tab } from '../Tab'; 

describe('Tab Component', () => {
  it('should render with the correct classes when the `active` prop is true', () => {
    const { container } = render(<Tab active={true} title="Active Tab" onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('tab-wrapper active');
    expect(container.querySelector('.title')).toHaveClass('title active');
  });

  it('should render with the correct classes when the `active` prop is false', () => {
    const { container } = render(<Tab active={false} title="Inactive Tab" onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('tab-wrapper');
    expect(container.querySelector('.title')).toHaveClass('title');
  });

  it('should call the `onClick` function when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Tab active={false} title="Clickable Tab" onClick={mockOnClick} />);
    fireEvent.click(getByText('Clickable Tab'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});