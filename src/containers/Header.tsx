"use client";

import SelfieImage from "../../public/selfie.png";
import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  isOpenedSidebar,
  toggleSidebar,
}: {
  isOpenedSidebar: boolean;
  toggleSidebar: () => void;
}) {
  const { isBrightTheme } = useThemeContext();

  return (
    <>
      <header
        className={`${isBrightTheme ? "light-theme border-b border-b-gray-200" : "dark-theme"} flex sticky top-0 left-0 right-0 items-center z-10 p-5`}
      >
        <nav className="flex justify-between w-full">
          <Link href="/" className="flex gap-2">
            <Image
              src={SelfieImage}
              alt="A photo of soozynn"
              width={30}
              height={30}
              priority={true}
              className="rounded-full"
              quality={95}
            />
            <span>soozynn.dev</span>
          </Link>

          <div className="hidden md:block">
            <ul className="flex gap-5">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex items-center" onClick={toggleSidebar}>
            {isOpenedSidebar ? (
              <button className="relative flex justify-center items-center w-6 h-6 focus:outline-none">
                <span
                  className={`absolute block w-5 h-0.5 ${isBrightTheme ? "dark-theme" : "light-theme"} transition-transform duration-300 ${isOpenedSidebar ? "transform rotate-45" : ""}`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 ${isBrightTheme ? "dark-theme" : "light-theme"} transition-transform duration-300 ${isOpenedSidebar ? "transform -rotate-45" : "mt-1"}`}
                ></span>
              </button>
            ) : (
              <button className="relative flex justify-center items-center w-6 h-6 focus:outline-none">
                <span
                  className={`absolute block w-5 h-0.5 ${isBrightTheme ? "dark-theme" : "light-theme"} transform transition duration-300 ${isOpenedSidebar ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 ${isBrightTheme ? "dark-theme" : "light-theme"} transform transition duration-300 ${isOpenedSidebar ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
                <span
                  className={`absolute block w-5 h-0.5 ${isBrightTheme ? "dark-theme" : "light-theme"} transform transition duration-300 ${isOpenedSidebar ? "opacity-0" : "opacity-100"}`}
                ></span>
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
