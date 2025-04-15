import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "@/layout/base-layout";
import Loader from "@/components/common/loader";
import Projects from "@/pages/Projects";

const Home = lazy(() => import("../pages/Home"));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Loader />
          </div>
        }
      >
        <BaseLayout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
          </Routes>
        </BaseLayout>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
