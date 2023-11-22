import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Setupakun = React.lazy(() => import("pages/Setupakun"));
const TentangKami = React.lazy(() => import("pages/TentangKami"));
const Daftar = React.lazy(() => import("pages/Daftar"));
const Masuk = React.lazy(() => import("pages/Masuk"));
const Kontak = React.lazy(() => import("pages/Kontak"));
const Beranda = React.lazy(() => import("pages/Beranda"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/setupakun" element={<Setupakun />} />
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
