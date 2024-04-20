//todo Import packages
import { v4 } from "uuid";
import { Suspense, lazy } from "react";
import { ToastContainer, Slide } from "react-toastify";
import { Routes, Route } from "react-router-dom";

//todo Import routes
import { routes } from "./routes";

//todo Import Pages/Components
import { Loader } from "./components/loader";
const Login = lazy(() => import(`./pages/auth`));
const Error404 = lazy(() => import(`./pages/404`));

//todo Import Higher-Order Component
const Private = lazy(() => import(`./routes/private`));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <ToastContainer
        transition={Slide}
        autoClose={3000}
        draggablePercent={50}
        position="bottom-right"
      />
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
