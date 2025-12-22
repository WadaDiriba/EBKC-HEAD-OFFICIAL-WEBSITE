


import Home from "./components/Home/Home";
import Campus from "./components/Campus/Campus";
import Library from "./components/Librarys/Library";
import Contact from "./components/Contact/contact";
import Testmonial from "./components/Testmonial/Testmonial";
import About from "./components/about/about";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-gray-100">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Main Sections */}
      <Home />
      <About />
      <Campus />
      <Library />
      <Testmonial />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
