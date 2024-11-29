interface ChipProps {
  name: string;
  active: string;
  onClick: (value: string) => void;
}

const Chip = ({ name, active, onClick }: ChipProps) => {
  return (
    <button
      data-testid={name}
      className={`chip ${active === name ? 'chip-active' : ''}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default Chip;
