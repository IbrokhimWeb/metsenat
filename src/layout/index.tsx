import { FC } from "react";
import Header from "./header";

interface CustomProps {
  component: () => JSX.Element;
}

const Layout: FC<CustomProps> = ({ component: Component }) => {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full h-auto">
        <Component />
      </div>
    </div>
  );
};

export default Layout;
