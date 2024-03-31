import { useState } from "react";
import Filters from "../../components/Filters";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import WelcomeText from "../../components/WelcomeText";
import Searchbar from "../../components/Searchbar";
import { jobs } from "../../data/jobs";

const Home = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const handleFilterChange = ( filters: { contractStatus:string[], workStatus: string[] }) => {
    let filtered = [...jobs];
    if(filters.contractStatus.length > 0) {
      filtered = filtered.filter((job) => filters.contractStatus.includes(job.contractStatus));
    }
    if(filters.workStatus.length > 0) {
      filtered = filtered.filter((job) => filters.workStatus.includes(job.workStatus));
    }
    setFilteredJobs(filtered);
  };

  const handleSearch = (query: String) => {

  };

  return (
    <div className="w-full">
      <Hero />
      <Services />
      <div className="w-full mt-12 mb-12">
        <WelcomeText />
        <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
          <Filters savedJobs={savedJobs} onFilterChange={handleFilterChange} />
          <Searchbar onSearch={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Home;