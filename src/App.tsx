import Navbar from "./componnents/Navabar";


import Testmonials from "./componnents/Testmonial";
import Footer from "./componnents/Footer";

import About from "./componnents/about";
import Contactus from "./componnents/contact";


function App() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      

      <Navbar />
      
      <About />
      <Contactus />

      <Testmonials />
       
      <Footer />



    </div>
  )
}

export default App;
