import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/shared/WhatsAppButton";
import LoadingScreen from "./components/loading/LoadingScreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import FieldVisits from "./pages/FieldVisits";
import FieldVisitDetail from "./pages/FieldVisitDetail";
import Workshops from "./pages/Workshops";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Only show the loader once per browser session, not on every internal navigation
  const [loading, setLoading] = useState(() => !sessionStorage.getItem("wrsc-loaded"));

  const handleLoadingComplete = () => {
    sessionStorage.setItem("wrsc-loaded", "true");
    setLoading(false);
  };

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} duration={3200} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
          <Route path="/field-visits" element={<FieldVisits />} />
          <Route path="/field-visits/:slug" element={<FieldVisitDetail />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}