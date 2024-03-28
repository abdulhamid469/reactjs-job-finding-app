interface FilterProps {
  onFilterChange: (filters: {
    contractStatus: string[],
    workStatus: string[]
  }) => void;
  savedJobs: number[];
}
const Filters = ({ onFilterChange, savedJobs}:FilterProps) => {
  return (
    <div>Filters</div>
  )
}

export default Filters;