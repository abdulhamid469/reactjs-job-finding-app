import { CloseCircleOutline } from "react-ionicons";

interface FiltersProps {
  onFilterChange: (filters: {
    contractStatus: string[];
    workStatus: string[]
  }) => void;
  savedJobs: number[];
}
const Filters = ({ onFilterChange, savedJobs }: FiltersProps) => {

  const handleCloseFilters = () => {};

  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
      <div className="w-full bg-white rounded-lg p-5 border border-gray-200">
        <div className="w-full flex items-center justify-between">
          <span className="text-gray-800 font-semibold text-[15px]"> Filter Jobs </span>
          <CloseCircleOutline cssClasses={"cursor-pointer"} color="#ed5a85" onClick={handleCloseFilters} />
        </div>
        <div className="w-full md:flex-col flex-row justify-between gap-4 mt-5">
          <div className="flex flex-col gap-4">
            <span className="text-gray-800 font-semibold text-[15.5px]"> Contract Status </span>
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Full Time" className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-semibold text-[15px]">Full Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters;