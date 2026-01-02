import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/about/about";
import Campus from "./components/Campus/Campus";
import Library from "./components/Librarys/Library";
import Testmonial from "./components/Testmonial/Testmonial";
import Donate from "./components/Donate/Donate";
import Visit from "./components/visitus/Visit";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import History from "./components/history/history";



function App() {
  return (
    <Router>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Sections with routing */}
      <main style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/library" element={<Library />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/testimonial" element={<Testmonial />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* News component removed — import News and re-add <News /> here if needed */}


       
      </main>

        

      {/* Footer */}

      <Footer />
    </Router>
  );
}

export default App;
