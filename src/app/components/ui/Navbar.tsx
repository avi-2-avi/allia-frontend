"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 bg-secondary">
      <nav className="px-6 md:px-10 py-6">
        <div className="mx-auto flex justify-between items-center">
          <a className="flex items-center text-2xl gap-x-4 " href="/">
            <Image
              width={108.23}
              height={27}
              src="/icons/BrandingLogo.svg"
              alt="Evergrow Logo"
              loading="lazy"
            />
          </a>

          <div className="hidden xl:flex space-x-16 items-center">
            <a href="#lorem_ipsum" className="underline-offset-4 font-light">
              Lorem ipsum
            </a>
            <Button text={"Download"} style={"PRIMARY"} />
          </div>

          <button className="xl:hidden" onClick={toggleMenu}>
            {showMenu ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`absolute bg-secondary px-8 pt-2 pb-8 w-full xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="text-right ml-auto">
          <li className="py-4">
            <a href="#lorem_ipsum" className="font-light">
              Lorem ipsum
            </a>
          </li>
          <li className="py-4">
            <Button text={"Download"} style={"PRIMARY"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
