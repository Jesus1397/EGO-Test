export interface FilterSectionProps {
  filter: string;
  sort: string;
  isDropdownOpen: boolean;
  isFilterDropdownOpen: boolean;
  handleFilterClick: (newFilter: string) => void;
  handleSortChange: (sortValue: string) => void;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFilterDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
