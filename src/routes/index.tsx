import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "@/layout/BaseLayout";
import Loader from "@/components/common/Loader";

const Home = lazy(() => import("../pages/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const Blog = lazy(() => import("../pages/Blog"));
const NotFound = lazy(() => import("../pages/NotFound"));

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
            <Route
              path="/blog/*"
              element={<Blog />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </BaseLayout>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
