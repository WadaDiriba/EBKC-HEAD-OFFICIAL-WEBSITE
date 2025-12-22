

export default function Navbar() {
  return (

   <nav className="fixed top-0 w-full transition-colors duration-500 bg-blue-500 shadow-md z-50 bg-slate-950/20 bg-drop-shadow-lg backdrop-blur-sm">
      <div      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div >   

              <img src="assets/logo.png" 
              alt="EBKC" 
              className="w-6 h-6 sm:w-8 h-8"/>

            </div>

            <span  className="text-white font-bold text-xl">ETHIOPIAN </span>
            <span className="text-white font-bold text-xl"> BERHANA</span>
            <span className="text-white font-bold text-xl">KIRISTOS CHURCH</span>
            
          </div>
        </div>
      </div>
    </nav>
    
  );
}
