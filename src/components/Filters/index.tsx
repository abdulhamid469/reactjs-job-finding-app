import { useState } from "react";
import { CloseCircleOutline } from "react-ionicons";
import { useNavigate } from "react-router";

interface FiltersProps {
  onFilterChange: (filters: {
    contractStatus: string[];
    workStatus: string[]
  }) => void;
  savedJobs: number[];
}
const Filters = ({ onFilterChange, savedJobs }: FiltersProps) => {

  const [contract, Setcontract] = useState<string[]>([]);
  const [work, setWork] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleCloseFilters = () => {};
  const handleContractStatusChange = () => {};
  const handleLocationStatusChange = () => {};

  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
      <div className="w-full bg-white rounded-lg p-5 border border-gray-200">
        <div className="w-full flex items-center justify-between">
          <span className="text-gray-800 font-semibold text-[15px]"> Filter Jobs </span>
          <CloseCircleOutline cssClasses={"cursor-pointer"} color="#ed5a85" onClick={handleCloseFilters} />
        </div>
        <div className="w-full flex md:flex-row flex-col justify-between gap-4 mt-5">
          <div className="flex flex-col gap-4">
            <span className="text-gray-800 font-semibold text-[15.5px]"> Contract Status </span>
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Full Time" checked={contract.some((c) => c === "Full Time")} onChange={handleContractStatusChange} className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-semibold text-[15px]">Full Time</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Part Time" checked={contract.some((c) => c === "Part Time")} onChange={handleContractStatusChange} className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-semibold text-[15px]">Part Time</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Internship" checked={contract.some((c) => c === "Internship")} onChange={handleContractStatusChange} className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-semibold text-[15px]">Internship</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-gray-800 font-semibold text-[15.5px]"> Location Status </span>
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="On-Site" checked={contract.some((c) => c === "On-Site")} onChange={handleLocationStatusChange} className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-semibold text-[15px]">On-Site</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Remote" checked={contract.some((c) => c === "Remote")} onChange={handleLocationStatusChange} className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-semibold text-[15px]">Remote</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <input type="checkbox" value="Hybrid" checked={contract.some((c) => c === "Hybrid")} onChange={handleLocationStatusChange} className="w-[16px] h-[16px]" />
                <span className="text-gray-800 font-semibold text-[15px]">Hybrid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg mt-5 p-5 border border-gray-200">
        <div className="w-full flex flex-col gap-2">
          <span className="text-gray-800 font-semibold text-[15px]">Saved Jobs</span>
          <div className="w-full flex flex-col gap-5">
            {
              !savedJobs.length && (<span className="text-gray-400 text-[14px]">You don't have any saved jobs yet!</span>)
            }
            {
              savedJobs.map((job) => {
                const j = jobs.find((j) => j.id === job);
                if(j) {
                  return <div key={job} className="text-gray-800 flex items-center justify-between w-full border border-gray-300 pb-3">
                    <div className="flex flex-col items-start gap-1">
                      <span className="">j.title</span>
                    </div>
                  </div>
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;