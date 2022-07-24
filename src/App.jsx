import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Servicespage } from "./pages/Servicespage";
import { Feedbackpage } from "./pages/Feedbackpage";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/servicespage" element={<Servicespage />} />
        <Route path="/feedbackpage" element={<Feedbackpage />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
