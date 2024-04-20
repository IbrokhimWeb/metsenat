import Dashboard from "../pages/dashboard";
import Sponsors from "../pages/sponsors";
import Students from "../pages/students";

export const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/sponsors",
    component: Sponsors,
  },
  {
    path: "/students",
    component: Students,
  },
];
