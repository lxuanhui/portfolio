import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [darkMode, setDarkMode] = useState(() => {
        const storedTheme = window.localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);
        console.log('Stored theme:', storedTheme, 'Prefers dark:', prefersDark, 'Initial dark mode:', initialDarkMode);
        return initialDarkMode;
    });


    useEffect(() => {
        window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);


    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setShowNavbar(false);
        } else if (window.scrollY < lastScrollY) {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav style={{ top: showNavbar ? '0' : '-100%', transition: 'top 0.3s ease-in-out' }}
            className="fixed w-full z-50 bg-white shadow-lg ease-in-out dark:bg-slate-900">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo or Brand name */}
                    <div className="flex items-center justify-start md:pl-10">
                        <a href="#aboutme" className="text-xl font-medium mr-10 text-gray-800 dark:text-gray-400">
                            <img src="blob.svg" alt="home" className="w-10 h-10" />
                        </a>
                    </div>

                    {/* Centered Navbar items */}
                    <div className="hidden md:flex justify-center items-center flex-1">
                        {/* Links that will be shown on md screens and larger */}
                        <a
                            href="#aboutme"
                            className="text-gray-600 px-3 py-2 rounded-md text-lg font-medium dark:text-gray-400"
                        >
                            About Me
                        </a>
                        <a
                            href="#experience"
                            className="text-gray-600 px-3 py-2 rounded-md text-lg font-medium dark:text-gray-400"
                        >
                            Experience
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-600 px-3 py-2 rounded-md text-lg font-medium dark:text-gray-400"
                        >
                            Projects
                        </a>
                    </div>

                    {/* Right-aligned items, e.g., a contact button or social links */}
                    <div className="hidden md:flex flex items-center justify-end px-10 ">
                        <a onClick={toggleDarkMode} className="mx-5 p-2 cursor-pointer rounded hover:bg-slate-200 dark:hover:bg-slate-800">
                            {darkMode ? <SunIcon className="h-6 w-6 text-yellow-500" /> : <MoonIcon className="h-6 w-6 text-gray-700" />}
                        </a>
                        {/* Elements that will be hidden on mobile screens */}
                        {/* dark mode button with color scheme*/}
                        <a
                            href="Resume_Lee_Xuanhui.pdf"
                            className="inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline"
                        >
                            Resume
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="ml-2 -mr-1 w-4 h-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>


                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
                <a href="#aboutme" className="block py-2 px-4 text-sm text-slate-200">
                    About Me
                </a>
                <a href="#experience" className="block py-2 px-4 text-sm text-slate-200">
                    Experience
                </a>
                <a href="#projects" className="block py-2 px-4 text-sm text-slate-200">
                    Projects
                </a>
                <a href="Resume_Lee_Xuanhui.pdf" className="block py-2 px-4 text-sm text-slate-200">
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
