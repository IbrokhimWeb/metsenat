//todo Import packages
import { FC } from "react";

// eslint-disable-next-line
export const Input: FC<any> = (props) => {
  const { title, ...other } = props;

  return (
    <div role="input" className="w-full flex flex-col gap-2 mt-6">
      <label
        htmlFor={title}
        className="cursor-pointer uppercase font-medium leading-[14.22px]"
      >
        {title}
      </label>
      <input
        id="title"
        {...other}
        className="w-full font-normal py-[8px] px-[10px] rounded-md border border-[#e0e7ff] bg-blue-100 placeholder:text-[#2e384d64]  focus:outline-[#4c70ff7d]"
      />
    </div>
  );
};
