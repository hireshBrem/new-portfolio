'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    function scrollToSection(id: string) {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}) 
    }

    return(
<nav className="bg-gray-900 font-lato sticky w-full z-20 top-0 left-0">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <div className="items-center hidden w-full md:inline-flex">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg">
            <Link href="/#" className="/block md:hover:text-sky-500 py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0">About</Link>
            <Link href="/#ideas" className="/block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 text-white">Ideas</Link>
            <Link href="/#projects" className="/block md:hover:text-sky-500 py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0">Projects</Link>
            <Link href="/#services" className="/block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 text-white">Services</Link>
            <Link href="/#testimonials" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 text-white">Testimonials</Link>
        </ul>
    </div>
    <div className="flex justify-between">
    <button onClick={()=>setNavbarOpen(!navbarOpen)} type="button" className="inline-block float-right right-0 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    </div>
    <a href="/contact" type="button" className="text-white bg-gradient-to-r md:inline-flex from-indigo-500 from-10 to-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 ">Contact</a>
  </div>
  {
        navbarOpen ===true ? 
        <div className="absolute md:hidden rounded-r-md w-[40%]  bg-gradient-to-tr from-indigo-500 from-10 to-sky-500">
            <ul>
                <Link href="/#about" className="block py-2 pl-3 pr-4 text-white rounded ">About</Link>
                <Link href="/#ideas" className="block py-2 pl-3 pr-4 rounded text-white">Ideas</Link>
                <Link href="/#projects" className="block py-2 pl-3 pr-4 rounded text-white">Projects</Link>
                <Link href="/#services" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 text-white">Services</Link>
                <Link href="/#testimonials" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 text-white">Testimonials</Link>
            </ul>

        </div>
        :null

    }
</nav>

    )
} 