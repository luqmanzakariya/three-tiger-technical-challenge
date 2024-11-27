import Chip from "../../atoms/Chip";

interface FilterMoleculesProps {
  filter: string;
  setFilter: (prev: string) => void;
}

const filterList = [
  {
    id: 0,
    name: "all",
  },
  {
    id: 1,
    name: "personal",
  },
  {
    id: 2,
    name: "work",
  },
];

const FilterMolecules = ({ filter, setFilter }: FilterMoleculesProps) => {
  const handleFilter = (value: string) => {
    setFilter(value);
  };
  return (
    <div className="filter-wrapper">
      <div className="filter-title">Filter:</div>
      <div className="pl-[10px] flex align-center gap-[10px]">
        {filterList.map(({ id, name }:{id: number, name: string} ) => (
          <Chip key={id} name={name} active={filter} onClick={handleFilter} />
        ))}
      </div>
    </div>
  );
};

export default FilterMolecules;
