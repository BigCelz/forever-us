import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Backstory from "./pages/BackStory";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import PhotoBook from "./pages/PhotoBook";
import AllPhotos from "./pages/AllPhotos";
import Asoebi from "./pages/Asoebi";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<Backstory />} />
            <Route path="/details" element={<Events />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/photobook" element={<PhotoBook />} />
            <Route path="/photobook/all" element={<AllPhotos />} />
            <Route path="/asoebi" element={<Asoebi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
