import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-3 px-40 bg-white max-lg:px-20 max-[860px]:gap-2 max-[860px]:flex-col-reverse">
      <section className="flex items-center justify-center">
        <NavLink
          to={"/"}
          style={({ isActive }) => (isActive ? {} : {})}
          className="text-[12px] px-14 py-2 rounded-l-md border border-r-0 font-medium border-[#3366ff7a] text-[#3366ff7a] max-[1300px]:px-8 max-[860px]:px-14 max-md:px-8 max-md:py-1 max-sm:px-6"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/sponsors"}
          style={({ isActive }) => (isActive ? {} : {})}
          className="text-[12px] px-14 py-2 border font-medium border-[#3366ff7a] bg-blue-200 text-white max-[1300px]:px-8 max-[860px]:px-14 max-md:px-8 max-md:py-1 max-sm:px-6"
        >
          Homiylar
        </NavLink>
        <NavLink
          to={"/students"}
          style={({ isActive }) => (isActive ? {} : {})}
          className="text-[12px] px-14 py-2 rounded-r-md border border-l-0 font-medium border-[#3366ff7a] text-[#3366ff7a] max-[1300px]:px-8 max-[860px]:px-14 max-md:px-8 max-md:py-1 max-sm:px-6"
        >
          Talabalar
        </NavLink>
      </section>
      <section className="flex items-center justify-center gap-5 max-md:gap-2">
        <div
          role="input"
          className="w-[284px] flex items-center py-2 px-[10px] rounded-md bg-[#E8E8E8] focus-visible:outline-[#4c70ff7d] max-[1300px]:w-[250px] max-[860px]:w-[300px] max-md:w-[284px] max-md:py-1 max-sm:w-[250px]"
        >
          <img src="/images/search.svg" alt="Search icon" />
          <input
            type="text"
            placeholder="Search"
            className="w-full font-normal border-none px-2  bg-transparent placeholder:text-[#B1B1B8]  focus:outline-none"
          />
        </div>
        <button className="px-10 py-2 rounded-md flex items-center gap-2 text-[#3365FC] bg-[#EDF1FD] max-sm:px-5">
          <img src="/images/filter.svg" alt="" />
          <span className="max-[1300px]:hidden max-[860px]:block max-sm:hidden">
            Filter
          </span>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
