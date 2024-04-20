import { FC, useEffect } from "react";
import { counterWithFormattedNumbers } from "../../utils";

interface CustomProps {
  res: {
    total_paid: number;
    total_need: number;
    total_must_pay: number;
  };
  index: number;
}

interface CustomWiget {
  title: string;
  price: "total_paid" | "total_need" | "total_must_pay";
}

const widgets: Array<CustomWiget> = [
  { title: "Jami to‘langan summa", price: "total_paid" },
  { title: "Jami so‘ralgan summa", price: "total_need" },
  { title: "To‘lanishi kerak summa", price: "total_must_pay" },
];

const Widget: FC<CustomProps> = ({ index, res }) => {
  useEffect(
    () =>
      counterWithFormattedNumbers(
        widgets[index]?.price,
        res ? res[widgets[index]?.price] : 0
      ),
    [index, res]
  );

  return (
    <div className="p-5 rounded-md flex items-center justify-start gap-5 bg-white  max-xl:p-3">
      <img
        src={`/images/monney/${index}.svg`}
        alt="Icon"
        className="w-[48px] h-[48px] max-xl:w-[40px] max-xl:h-[40px] max-sm:w-[35px] max-sm:h-[35px]"
      />
      <div>
        <h1 className="font-normal text-[12px] text-[#7A7A9D] max-xl:text-[10px] max-sm:text-[8px]">
          {widgets[index]?.title || ""}
        </h1>
        <p className="font-bold text-[20px] text-[#2E384D] max-xl:text-[15px] max-sm:text-[12px]">
          <span id={widgets[index]?.price}></span>{" "}
          <span className="text-[#B2B7C1]">UZS</span>
        </p>
      </div>
    </div>
  );
};

export default Widget;
