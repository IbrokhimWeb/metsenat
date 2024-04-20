import { memo } from "react";

export const Loader = memo(() => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <div className="loader">
        <span />
        <span />
      </div>
    </div>
  );
});
