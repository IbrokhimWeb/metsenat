import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Header = memo(() => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-[9vh] flex items-center justify-between py-3 px-40 bg-white max-lg:px-20 max-md:px-10 max-sm:px-6">
      <img
        src="/images/logo.svg"
        alt="Logo"
        width={172}
        height={24}
        className="max-md:w-[152px] max-sm:w-[112px]"
      />
      <section className="flex items-center justify-center gap-10 max-md:gap-5 max-sm:gap-1">
        <div className="flex items-center gap-5 p-2 rounded-md bg-[#F1F1F3] max-md:py-1 max-md:pr-1 max-md:gap-4 max-sm:gap-2">
          <h1 className="font-bold text-[13px]">Shohrux</h1>
          <img
            src="/images/user.svg"
            alt="Ava"
            width={32}
            height={32}
            className="px-[5px] pt-2 bg-green-200 rounded-md max-sm:pt-1 max-sm:px-1"
          />
        </div>
        <button
          name="logout"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          <img src="/images/logout.svg" alt="Longout" width={32} height={32} />
        </button>
      </section>
    </header>
  );
});

export default Header;
