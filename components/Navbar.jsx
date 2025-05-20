"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "HOME", number: "00" },
    { href: "/destination", label: "DESTINATION", number: "01" },
    { href: "/crew", label: "CREW", number: "02" },
    { href: "/technology", label: "TECHNOLOGY", number: "03" },
  ];

  return (
    <nav className="flex items-center justify-center pt-5 w-full fixed z-50">
      <div className="flex pl-16 gap-16 justify-center items-center">
        <Link href="/">
          <img
            src="/Logo.svg"
            alt="Logo"
            className="transition-opacity hover:opacity-70"
          />
        </Link>
        <hr className="bg-white w-[568px]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-10 h-0.5 bg-white"></div>
        <div className="w-10 h-0.5 bg-white"></div>
        <div className="w-10 h-0.5 bg-white"></div>
      </div>
      <ul className=" condensed flex py-9 gap-12 pr-16 pl-[159px] backdrop-blur-md bg-white/5 text-white text-xl tracking-[2px]">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`pb-2 border-b-transparent hover:border-b-white hover:border-b-[3px] transition-all ${
                pathname === item.href ? "border-b-white border-b-[3px]" : ""
              }`}
            >
              <span className="font-bold tracking-[2.7px] mr-2">
                {item.number}
              </span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
