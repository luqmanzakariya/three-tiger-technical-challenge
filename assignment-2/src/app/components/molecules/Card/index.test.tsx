import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/app/components/molecules/Card';

describe('Card Component', () => {
  const mockOnChange = jest.fn();

  const mockProps = {
    id: 1,
    title: 'Test Task',
    category: 'personal',
    createdAt: '2024-10-30T10:30:00.000Z',
    completed: false,
    onChange: mockOnChange,
  };

  it('renders the card with the correct title, category, and formatted date correctly', () => {
    render(<Card {...mockProps} />);

    // Check if title is rendered
    const titleElement = screen.getByText('Test Task');
    expect(titleElement).toBeInTheDocument();

    // Check if category is rendered
    const categoryElement = screen.getByText('personal');
    expect(categoryElement).toBeInTheDocument();

    // Check if the date is formatted and rendered correctly
    const dateElement = screen.getByText('2024/10/30 17:30');
    expect(dateElement).toBeInTheDocument();

    // Check checkbox is unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders a checkbox with the default unchecked state', () => {
    render(<Card {...mockProps} />);

    // Check if the checkbox is rendered
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    // Ensure the checkbox is unchecked by default
    expect(checkbox).not.toBeChecked();
  });

  it('applies the correct classes to elements', () => {
    render(<Card {...mockProps} />);

    // Check if the card container has the correct class
    const cardElement = screen.getByTestId('todo');
    expect(cardElement).toHaveClass('card');

    // Check if the title element has the correct class
    const titleElement = screen.getByText('Test Task');
    expect(titleElement).toHaveClass('card-title');

    // Check if the description element has the correct class
    const categoryElement = screen.getByText('personal');
    expect(categoryElement).toHaveClass('card-description');
  });

  it('calls onChange with the correct arguments when checkbox is clicked', () => {
    render(<Card {...mockProps} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(1, true); // Toggles completed to true
  });
});
