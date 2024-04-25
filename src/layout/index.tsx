import { FC } from "react";
import Header from "./header";
import Navbar from "./navbar";
import { CustomLayoutProps } from "../utils";

const Layout: FC<CustomLayoutProps> = ({ component: Component }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-[18vh]">
        <Header />
        <Navbar />
      </div>
      <div className="w-full h-[82vh] py-5 px-40 max-xl:py-5 max-lg:px-10 max-md:px-5">
        <Component />
      </div>
    </div>
  );
};

export default Layout;
