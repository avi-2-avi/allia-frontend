"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

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
        <div className="fixed top-0 w-full z-50 backdrop-blur-sm h-[72px]">
            {/* TODO: Add the correct hyperlinks */}
            <nav className={`px-8 xl:px-0 xl:max-w-[1320px] xl:mx-auto py-6`}>
                <div className="mx-auto flex justify-between items-center">
                    <Link href={"/public"} className="flex items-center text-2xl gap-x-4">
                        <Image
                            width={108.23}
                            height={27}
                            src="/icons/BrandingLogo.svg"
                            alt="Evergrow Logo"
                            loading="lazy"
                        />
                    </Link>
                    <div className="hidden xl:flex space-x-16 items-center">
                        <Link href="#" className="underline-offset-4 font-light hover:text-accent">
                            Features
                        </Link>
                        <Link href="#" className="underline-offset-4 font-light hover:text-accent">
                            Try Demo
                        </Link>
                        <Link href="#" className="underline-offset-4 font-light hover:text-accent">
                            Trends
                        </Link>
                        <Link href="#" className="underline-offset-4 font-light hover:text-accent">
                            Plans
                        </Link>
                        <Button className={"w-44"} text={"Sign up free"} style={"PRIMARY"}/>
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
                                <path d="M6 18L18 6M6 6l12 12"/>
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
                                <path d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* TODO: Add the correct hyperlinks */}
            <div
                className={`absolute bg-background px-8 pt-2 pb-2 w-full xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="text-right ml-auto">
                    <li className="flex flex-col py-4 space-y-2.5">
                        <Link href="#" className="font-light hover:text-accent">
                            Features
                        </Link>
                        <Link href="#" className="font-light hover:text-accent">
                            Try Demo
                        </Link>
                        <Link href="#" className="font-light hover:text-accent">
                            Trends
                        </Link>
                        <Link href="#" className="font-light hover:text-accent">
                            Plans
                        </Link>
                    </li>
                    <li className="py-2">
                        <Button className={"w-44"} text={"Sign up free"} style={"PRIMARY"}/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
