"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "HOME", number: "00" },
  { href: "/destination", label: "DESTINATION", number: "01" },
  { href: "/crew", label: "CREW", number: "02" },
  { href: "/technology", label: "TECHNOLOGY", number: "03" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed w-full flex items-center justify-between px-6 md:pl-6 md:pr-0 py-4 z-50">
        {/* Logo and horizontal line */}
        <div className="flex items-center gap-6 flex-1/2">
          <Link href="/">
            <img
              src="/Logo.svg"
              alt="Logo"
              className="transition-opacity hover:opacity-70 w-10 md:w-auto"
            />
          </Link>
          <hr className="hidden lg:block bg-white opacity-25 w-full" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex condensed justify-center py-6 gap-12 px-10 backdrop-blur-md bg-white/10 text-white text-xl tracking-[2px] flex-1/2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`pb-2 border-b-transparent hover:border-b-white hover:border-b-[3px] transition-all ${
                  pathname === item.href ? "border-b-white border-b-[3px]" : ""
                }`}
              >
                <span className="font-bold tracking-[2.7px] mr-2">{item.number}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close Button (Mobile Only) */}
        <button
          className="md:hidden fixed top-3.5 right-6 text-white z-[999] text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white/5 backdrop-blur-md transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 mt-24 ml-8 text-white text-xl">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 transition-all ${
                  pathname === item.href ? "font-bold underline" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-bold mr-2">{item.number}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}