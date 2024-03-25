import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const navLinks = [
    {
      title: "Home",
      path: "/",
      active: true,
    },
    {
      title: "Listed Jobs",
      path: "listed-jobs",
      active: false,
    },
    {
      title: "News Letter",
      path: "news-letter",
      active: false,
    },
    {
      title: "Contact",
      path: "contact",
      active: false,
    },
    {
      title: "About",
      path: "about",
      active: false,
    },
  ]
  return (
    <div className="w-full h-[60px] bg-white shadow-sm absolute top-0 flex z-10">
      <div className="w-full md:px-[50px] px-23 flex items-center justify-between">
        <div className="text-indigo-500 font-bold text-[28px] cursor-pointer md:ml-[12px]" onClick={() => navigate("/")}>
          <span>Job </span><span className="text-indigo-300">Finder</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {
            navLinks.map((navLink, index:number) => {
              return (
                <a href={navLink.path} key={index} className={`font-medium text-[15px] ${navLink.active ? "text-indigo-500" : "text-[#828ea8]"} transition-all duration-200 hover:text-indigo-500`}>{navLink.title}</a>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;