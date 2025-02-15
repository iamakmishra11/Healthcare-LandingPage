import React from "react";
import { FaUserShield, FaBullseye, FaHandshake } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 ">
      <header className="bg-[#003366] text-white flex items-center justify-between px-95 py-4">
        <div className="flex items-center ml-4">
          <h1 className="text-2xl font-bold">
            <span className="text-white font-semibold ">Health</span>
            <span className="text-gray-300 ">Insurance</span>
          </h1>
        </div>
        <p className="text-lg text-gray-300 whitespace-nowrap ml-25">
          Get a free quote and start saving now
        </p>
      </header>

      <main className="container">
      <section
      className="relative flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
      style={{
        backgroundImage: "url(img1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Left Content */}
      <div className="relative w-full md:w-1/2 p-8 text-center md:text-left">
      <h2 className="text-4xl mb-6 font-extrabold text-white leading-snug tracking-wide uppercase">
  <span className="text-gray-300 pr-52 font-light">Providing the</span> <br />
  <span className="text-white font-bold">Highest Standard Care</span>
</h2>
      </div>

      {/* Right Content (Form) */}
      <div className="relative w-full md:w-1/3 bg-red-700 bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm mx-auto md:mx-0">
        <h3 className="text-2xl mb-4 text-center font-bold text-white">FREE QUOTE</h3>
        <p className="text-center text-white text-sm mb-4">Lorem Ipsum is simply dummy text of the printing</p>
        <form className="space-y-4">
          <div className="flex space-x-2">
            <input type="text" placeholder="First Name" className="w-1/2 p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-white" />
            <input type="text" placeholder="Last Name" className="w-1/2 p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-white" />
          </div>
          <input type="email" placeholder="Email Address (Required)" className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-white" />
          <input type="text" placeholder="Phone Number (Required)" className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-white" />
          <div className="flex space-x-2">
            <input type="text" placeholder="State" className="w-1/2 p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-white" />
            <input type="text" placeholder="Zip Code" className="w-1/2 p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-white" />
          </div>
          <textarea placeholder="Comment" className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-white"></textarea>
          <button type="submit" className="bg-blue-700 text-white py-3 px-4 w-full rounded-md hover:bg-blue-800 transition font-bold">
            GET A QUOTE
          </button>
        </form>
      </div>
    </section>

        {/* Additional Sections */}
        <section className="flex flex-col md:flex-row w-full items-center justify-around bg-gray-200">
          <div className="w-full md:w-1/3 text-center">
            <FaUserShield className="text-blue-600 mx-auto" size={40} />
            <h3 className="text-xl font-bold my-2">Health Group</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-full md:w-1/3 text-center p-6">
            <FaBullseye className="text-blue-600 mx-auto" size={40} />
            <h3 className="text-xl font-bold my-2">Our Mission</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="w-full md:w-1/3 text-center p-6">
            <FaHandshake className="text-blue-600 mx-auto" size={40} />
            <h3 className="text-xl font-bold my-2">Why Choose Us</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>

        <section className="flex flex-col items-start justify-start">
          <div className="w-full md:w-2/3 p-0 flex flex-row md:flex-row items-center mx-auto">
            <img src="img2.webp" alt="Family Picnic" className="w-full md:w-1/2 h-95" />
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl mb-4">Inexpensive Health Insurance Plans</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-0 flex flex-col md:flex-row items-center mx-auto">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-2xl mb-4">Protecting Your Family, Your Life</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </div>
            <img src="img3.webp" alt="Family Picnic" className="w-full md:w-1/2 h-75" />
          </div>
        </section>

        <section className="text-center bg-blue-900 py-4">
          <h2 className="text-2xl text-white mb-4">The Right Health Plan at the Right Price</h2>
          <p className="mb-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
          <button className="bg-red-500 text-white p-2 px-4">Get a Quote</button>
        </section>

        <section>
          <blockquote className="border-l-4 border-gray-300 pl-4 my-4">
            <p className="italic text-lg">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words.
            </p>
            <footer className="text-right mt-2">- George Martin</footer>
          </blockquote>
        </section>
      </main>
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>&copy; 2023 Health Insurance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
