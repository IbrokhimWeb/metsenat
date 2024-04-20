import Sponsor from "../pages/sponsor";
import Sponsors from "../pages/sponsors";
import Students from "../pages/students";
import Dashboard from "../pages/dashboard";

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
    path: "/sponsor/:id",
    component: Sponsor,
  },
  {
    path: "/students",
    component: Students,
  },
];
