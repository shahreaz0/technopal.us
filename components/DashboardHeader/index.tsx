"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import menuData from "./menuData";
import { useAuth, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const DashboardHeader = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pathUrl = usePathname();
  const router = useRouter();

  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();

  console.log();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header className="py-3 bg-white dark:bg-black shadow transition duration-100">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <a href="/">
            <h4 className="text-2xl text-primary">Technopal.us</h4>

            {/* <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full hidden dark:block"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            /> */}
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="lg:hidden block"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="block absolute w-full h-full">
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                    !navigationOpen ? "!w-full delay-300" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                    !navigationOpen ? "!w-full delay-400" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                    !navigationOpen ? "!w-full delay-500" : ""
                  }`}
                ></span>
              </span>
              <span className="block absolute w-full h-full rotate-45">
                <span
                  className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-0 ${
                    navigationOpen ? "h-full delay-[0]" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-[.03rem] w-full h-0 ${
                    navigationOpen ? "h-0.5 dealy-200" : ""
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`w-full lg:w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${
            navigationOpen &&
            "!visible bg-white dark:bg-blacksection shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5"
          }`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
              {menuData
                .filter((menu) => {
                  if (user?.publicMetadata?.role !== "admin" && menu.path === "/payment")
                    return false;

                  return true;
                })
                .map((menuItem, key) => (
                  <li key={key} className={menuItem.submenu && "group relative"}>
                    {menuItem.submenu ? (
                      <>
                        <a
                          onClick={() => setDropdownToggler(!dropdownToggler)}
                          className="hover:text-primary flex items-center justify-between gap-3 cursor-pointer"
                        >
                          {menuItem.title}
                          <span>
                            <svg
                              className="fill-waterloo group-hover:fill-primary w-3 h-3 cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </span>
                        </a>

                        <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
                          {menuItem.submenu.map((item, key) => (
                            <li key={key} className="hover:text-primary">
                              <Link href={item.path || "#"}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={`${menuItem.path}`}
                        className={
                          pathUrl === menuItem.path
                            ? "hover:text-primary text-primary"
                            : "hover:text-primary"
                        }
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 mt-7 lg:mt-0">
            {isSignedIn ? (
              <button
                disabled={isLoading}
                onClick={async () => {
                  setIsLoading(true);
                  await signOut();
                  setIsLoading(false);
                  router.push("/signin");
                }}
                className="disabled:bg-primary/70 flex items-center justify-center bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-1.5 px-7"
              >
                Logout {isLoading && <Loader2 className="ml-2 animate-spin h-5 w-5" />}
              </button>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="text-waterloo text-regular font-medium hover:text-primary"
                >
                  Register
                </Link>

                <Link
                  href="/signin"
                  className="flex items-center justify-center bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-1.5 px-7"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
