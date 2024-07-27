"use client";
import { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { sidebarData } from "./../../data/SidebarData";
import { RiDashboardFill } from "react-icons/ri";
import { LuChevronRight } from "react-icons/lu";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState([]);
  const handleSubmenuToggle = (index) => {
    setSubmenuOpen((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="flex">
      <div
        className={`bg-primary p-5 pt-8  ${
          open ? "w-72" : "w-20"
        } h-screen relative duration-300`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={` text-3xl   absolute -right-3 border border-primary rounded-full bg-white top-9 cursor-pointer  ${
            open ? "rotate-0" : "rotate-180"
          }`}
        />

        <div className="inline-flex items-center gap-x-2">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h3
            className={`text-white text-2xl font-medium duration-300 origin-left ${
              !open && "scale-0"
            }`}
          >
            Tailwind
          </h3>
        </div>

        <div
          className={`bg-secondary mt-6 rounded-md flex items-center py-2  ${
            open ? "px-4 " : "px-2.5"
          }`}
        >
          <BsSearch className={`text-white  text-lg ${open && "mr-2"}`} />
          <input
            type={"search"}
            placeholder="Search"
            className={`bg-transparent w-full focus:outline-none text-white ${
              !open && "hidden"
            } `}
          />
        </div>

        <ul className="pt-2 ">
          {sidebarData?.map((menu, index) => (
            <li
              onClick={(e) =>{
                e.stopPropagation();
                handleSubmenuToggle(index)
              }}
              key={index}
              className="text-gray-300 text-sm duration-300 "
            >
              <div className="flex items-center justify-between hover:bg-secondary p-2 rounded-md">
                <span className="cursor-pointer flex items-center gap-x-4 ">
                  <span className="text-2xl">
                    <RiDashboardFill />
                  </span>
                  <span
                    className={`font-medium text-base  ${!open && "hidden"}`}
                  >
                    {menu?.title}
                  </span>
                </span>
                {menu?.submenu && (
                  <LuChevronRight
                    className={`cursor-pointer duration-300 transform ${
                      submenuOpen.includes(index) ? "rotate-90" : " rotate-0"
                    }`}
                  />
                )}
              </div>
              {menu.submenu && submenuOpen.includes(index) && open && (
                <ul className="transition-max-height duration-300 ease-in-out overflow-hidden">
                  {menu?.submenu?.map((sub, subIndex) => (
                    <li onClick={(e)=>            e.stopPropagation()}
                      key={subIndex}
                      className="text-gray-300 text-sm  hover:bg-secondary p-2 rounded-md transition-all duration-300 ease-in-out "
                    >
                      <span className=" cursor-pointer">{sub?.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold"> Home</h1>
      </div>
    </div>
  );
};

export default Sidebar;
