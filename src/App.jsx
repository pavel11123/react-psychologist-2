import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Servicespage } from "./pages/Servicespage";
import { Feedbackpage } from "./pages/Feedbackpage";
import { Blogpage } from "./pages/Blogpage";
import { Questionpage } from "./pages/Questionpage";
import { Choisepage } from "./pages/Choisepage";
import { Massmediapage } from "./pages/Massmediapage";
import { Testpage } from "./pages/Testpage";
import { Notfoundpage } from "./pages/Notfoundpage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/feedback" element={<Feedbackpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog-five-question" element={<Questionpage />} />
        <Route path="/blog-choise-psychologist" element={<Choisepage />} />
        <Route path="/mass-media" element={<Massmediapage />} />
        <Route path="/test" element={<Testpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
