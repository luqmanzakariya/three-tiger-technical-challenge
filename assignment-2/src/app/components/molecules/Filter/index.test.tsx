import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterMolecules from '@/app/components/molecules/Filter';

describe('FilterMolecules Component', () => {
  const mockSetFilter = jest.fn();

  const defaultProps = {
    filter: 'all',
    setFilter: mockSetFilter,
  };

  it('renders the filter title', () => {
    render(<FilterMolecules {...defaultProps} />);
    const filterTitle = screen.getByText(/Filter:/i);
    expect(filterTitle).toBeInTheDocument();
  });

  it('renders the correct number of Chip components', () => {
    render(<FilterMolecules {...defaultProps} />);
    const chips = screen.getAllByRole('button');
    expect(chips).toHaveLength(3);
  });

  it('passes the correct props to Chip components', () => {
    render(<FilterMolecules {...defaultProps} />);
    const chips = screen.getAllByRole('button');
    const chipNames = ['all', 'personal', 'work'];

    chipNames.forEach((name, index) => {
      expect(chips[index]).toHaveTextContent(name);
      if (name === defaultProps.filter) {
        expect(chips[index]).toHaveClass('chip-active');
      } else {
        expect(chips[index]).not.toHaveClass('chip-active');
      }
    });
  });

  it('calls setFilter with the correct value when a Chip is clicked', () => {
    render(<FilterMolecules {...defaultProps} />);
    const chips = screen.getAllByRole('button');
    const chipToClick = chips[1];

    fireEvent.click(chipToClick);

    expect(mockSetFilter).toHaveBeenCalledTimes(1);
    expect(mockSetFilter).toHaveBeenCalledWith('personal');
  });
});
