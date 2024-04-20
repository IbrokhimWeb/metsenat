import { memo } from "react";

const Header = memo(() => {
  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-40 bg-white">
      <img src="/images/logo.svg" alt="Logo" />
      <section className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-5 p-2 rounded-md bg-[#F1F1F3]">
          <h1 className="font-bold text-[13px]">Shohrux</h1>
          <img src="/images/logout.svg" alt="" />
        </div>
        <img src="/images/logout.svg" alt="" />
      </section>
    </nav>
  );
});

export default Header;
