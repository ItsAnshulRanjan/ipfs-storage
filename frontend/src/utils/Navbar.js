import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="z-10 fixed h-full bg-transparent shadow-lg flex-col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden">
                <div className="flex space-x-4 flex-col align-center justify-center mt-48">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "rgb(55 65 81)" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                    to="/"
                    className="text-black hover:bg-[#90CAF9] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Home
                  </NavLink>
                  {/* <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "rgb(55 65 81)" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                    to="/events"
                    className="text-black hover:bg-[#90CAF9] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Events
                  </NavLink> */}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "rgb(55 65 81)" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                    to="/events"
                    className="text-black hover:bg-[#90CAF9] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Events
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "rgb(55 65 81)" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                    to="/team"
                    className="text-black hover:bg-[#90CAF9] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Team
                  </NavLink>

                  {/* <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "rgb(55 65 81)" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                    to="/spotlight"
                    className="text-black hover:bg-[#90CAF9] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Spotlight
                  </NavLink> */}

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "rgb(55 65 81)" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                    to="/spotlight"
                    className="text-black hover:bg-[#90CAF9] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Spotlight
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "rgb(55 65 81)" : "",
                        color: isActive ? "white" : "",
                      };
                    }}
                    to="/contact"
                    className="text-black hover:bg-[#90CAF9] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/"
                  className="text-black hover:bg-[#90CAF9] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/events"
                  className="text-black hover:bg-[#90CAF9] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </NavLink>
                {/* <a
                  href="https://codeofchaos.ieeecspesu.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:bg-[#90CAF9] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </a> */}
                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/team"
                  className="text-black hover:bg-[#90CAF9] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </NavLink>

                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/spotlight"
                  className="text-black hover:bg-[#90CAF9] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Spotlight
                </NavLink>

                {/* <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/spotlight"
                  className="text-black hover:bg-[#90CAF9] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Spotlight
                </NavLink> */}

                <NavLink
                  onClick={() => setIsOpen(!isOpen)}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "rgb(55 65 81)" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                  to="/contact"
                  className="text-black hover:bg-[#90CAF9] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
