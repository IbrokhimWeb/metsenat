import { memo } from "react";

export const Loader = memo(() => {
  return (
    <main className="w-full h-[60vh] flex items-center justify-center">
      <section className="loader">
        <span />
        <span />
      </section>
    </main>
  );
});
