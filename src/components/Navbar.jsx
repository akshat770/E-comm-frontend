function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 border-b">
          <h1 className="text-2xl font-bold text-blue-900">E-Comm</h1>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">HOME</a>
            <a href="#" className="hover:text-blue-500 transition-colors">BAG</a>
            <a href="#" className="hover:text-blue-500 transition-colors">SNEAKERS</a>
            <a href="#" className="hover:text-blue-500 transition-colors">BELT</a>
            <a href="#" className="hover:text-blue-500 transition-colors">CONTACT</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-gray-600" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span>Items</span>
              <span className="text-gray-400">$0.00</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
 
