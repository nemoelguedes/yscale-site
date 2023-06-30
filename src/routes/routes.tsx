import ScrollToTop from "components/scrolltotop";
import LPBeta from "pages/lpBeta";
import { Routes, Route, Navigate } from "react-router-dom";

export default function RoutesComponent() {

  return (
    <Routes>
      <Route path="/" element={<><ScrollToTop /><LPBeta /></>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};