import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Chip from "@/app/components/atoms/Chip";

describe("Chip Component", () => {
  const mockOnClick = jest.fn();
  
  const defaultProps = {
    name: 'Test',
    active: 'Test',
    onClick: mockOnClick,
  };

  it('renders the chip with the correct name', () => {
    render(<Chip {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test');
  });

  it('applies the "chip-active" class when active prop matches the name', () => {
    render(<Chip {...defaultProps} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('chip-active');
  });

  it('does not apply the "chip-active" class when active prop does not match the name', () => {
    render(<Chip {...defaultProps} active="Inactive" />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('chip-active');
  });

  it('calls onClick with the correct value when clicked', () => {
    render(<Chip {...defaultProps} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith('Test');
  });
});
