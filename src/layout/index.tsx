import { FC } from "react";
import Header from "./header";
import Navbar from "./navbar";

interface CustomProps {
  component: () => JSX.Element;
}

const Layout: FC<CustomProps> = ({ component: Component }) => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Navbar />
      <section className="w-full min-h-[70vh] overflow-x-hidden py-10 px-40 max-xl:py-5 max-lg:px-10 max-md:px-5">
        <Component />
      </section>
    </div>
  );
};

export default Layout;
