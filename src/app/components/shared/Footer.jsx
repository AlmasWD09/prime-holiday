"use client"

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
    <div className="container mx-auto px-4">
      {/* Connect With Us Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-orange-500 text-2xl font-bold mb-4">Connect With Us</h2>
          <ul className="space-y-2">
            <li>65 Hartford Crescent</li>
            <li>Birmingham</li>
            <li>B27 7QE</li>
            <li>Email: contact@primeholidaydestinations.com</li>
            <li>Phone: +44 7553 778086</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-600">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-green-800 my-6" />

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-between items-center space-y-4 md:space-y-0">
        <ul className="flex flex-wrap justify-center space-x-4 text-sm">
          <li><a href="#" className="hover:text-orange-500">About</a></li>
          <li><a href="#" className="hover:text-orange-500">Destinations</a></li>
          <li><a href="#" className="hover:text-orange-500">Blog</a></li>
          <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
          <li><a href="#" className="hover:text-orange-500">Cancellation & Refund</a></li>
        </ul>
        <div className="text-sm text-center md:text-left">
          © 2024 Rizmal Travel & Tours Limited <br />
          Company Number: 14730698 | Registered in England
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-2">Stay Up To Date</h3>
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-lg text-black focus:outline-none md:mr-4"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  </footer>
  )
}

export default Footer