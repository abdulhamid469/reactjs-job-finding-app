const Services = () => {
    const servicesList = [
        { title: "Service", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, voluptatem iste! Molestias qui" },
        { title: "Service", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, voluptatem iste! Molestias qui" },
        { title: "Service", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, voluptatem iste! Molestias qui" },
    ]
  return (
    <div className="w-full flex flex-col items-center gap-8 mt-16 mb-24 md:px-0 px-5">
        <div className="flex flex-col gap-1 text-center items-center">
            <span className="font-semibold text-2xl text-indigo-500">Our Services</span>
            <p className="text-[15px] text-gray-600 max-w-[500px] leading-7 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, voluptatem iste! Molestias quid</p>
            <div className="flex md:w-[65%] my-0 mx-auto w-full items-center gap-8 md:flex-row flex-col">
                {
                    servicesList.map((serviceList, index:number) => {
                        return (
                            <div className="w-full bg-white hover:bg-indigo-50 transition-all duration-200 p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-3 items-start" key={index} >
                                <span className="text-indigo-500 font-semibold">{serviceList.title}</span>
                                <p className="text-[15px] leading-7 text-gray-700">{serviceList.desc}</p>
                                <a href="#" className="text-indigo-500 text-[15px]">Lean more</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Services;