//todo Import packages
import { v4 } from "uuid";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

//todo Import Higher-Order Component
const Private = lazy(() => import(`./routes/private`));

//todo Import Pages/Components
import { Loader } from "./components/loader";
const Login = lazy(() => import(`./pages/auth`));
const Error404 = lazy(() => import(`./pages/404`));

//todo Import routes
import { routes } from "./routes";

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error404 />} />

        {routes?.map(({ path, component }) => (
          <Route
            key={v4()}
            path={path}
            element={<Private component={component} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
