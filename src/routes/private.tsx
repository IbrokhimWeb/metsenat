//todo Import packages
import { Navigate } from "react-router-dom";

//todo Import layout
import Layout from "../layout";
import { CustomLayoutProps } from "../utils";
import { FC } from "react";

const Private: FC<CustomLayoutProps> = ({ component }) => {
  const ac = localStorage.getItem("access");
  const re = localStorage.getItem("refresh");

  if (ac && re) return <Layout component={component} />;
  return <Navigate to="/login" replace />;
};

export default Private;
