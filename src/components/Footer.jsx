export default function Footer() {
  return (
    <footer className="bg-[#1e47cf] text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold">E-Comm</h2>
            <p className="text-sm mt-2 text-blue-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <p className="text-sm text-blue-200">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>

            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-sm text-blue-200">E-Comm, 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="font-bold mb-4">Information</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Infomation</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Service</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Infomation</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">My Account</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Infomation</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Our Offers</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Infomation</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1e47cf] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-center text-sm text-blue-100">
          <span className="text-center md:text-left">© 2018 Ecommerce theme by www.bbrain.in</span>
          <div className="flex gap-4 items-center flex-wrap justify-center">
            <img
              src="https://images.seeklogo.com/logo-png/49/1/western-union-2023-logo-png_seeklogo-499195.png"
              alt="Western Union"
              className="h-6 w-auto bg-white rounded shadow-sm p-1"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="h-6 w-auto bg-white rounded shadow-sm p-1"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6 w-auto bg-white rounded shadow-sm p-1"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-6 w-auto bg-white rounded shadow-sm p-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}


