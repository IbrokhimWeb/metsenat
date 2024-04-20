const Widget = () => {
  return (
    <div className="p-5 rounded-md flex items-center justify-start gap-5 bg-white  max-xl:p-3">
      <img
        src="/images/monney/0.svg"
        alt="Icon"
        className="w-[48px] h-[48px] max-xl:w-[40px] max-xl:h-[40px] max-sm:w-[35px] max-sm:h-[35px]"
      />
      <div>
        <h1 className="font-normal text-[12px] text-[#7A7A9D] max-xl:text-[10px] max-sm:text-[8px]">
          Jami to‘langan summa
        </h1>
        <p className="font-bold text-[20px] text-[#2E384D] max-xl:text-[15px] max-sm:text-[12px]">
          1 684 325 000 <span className="text-[#B2B7C1]">UZS</span>
        </p>
      </div>
    </div>
  );
};

export default Widget;
