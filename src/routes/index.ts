import Dashboard from "../pages/dashboard";
import Sponsor from "../pages/sponsor";
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
    path: "/sponsor/:id",
    component: Sponsor,
  },
  {
    path: "/students",
    component: Students,
  },
];
