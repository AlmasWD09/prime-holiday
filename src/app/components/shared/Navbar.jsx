"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const [getMenu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false)

  // background color add in navbar scroll
  // const changeBackground = () => {
  //   if (window.scrollY >= 32) {
  //     setNavbar(true)
  //   }
  //   else { setNavbar(false) }
  // }
  // window.addEventListener('scroll', changeBackground)

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/destination",
      title: "Destination",
    },
    {
      path: "/oman",
      title: "Oman",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ];
 
  return (
    <nav className={navbar ? 'bg-black/95 py-4 fixed w-full z-50' : ' py-4 fixed w-full z-50'}>
      <div className=" flex items-center justify-between container mx-auto px-4 ">
        <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
          {getMenu ? (
            <IoCloseSharp className="text-xl bg-primary/30 rounded-full w-10 h-10 p-2" />
          ) : (
            <GiHamburgerMenu className="text-xl bg-primary/30 rounded-full w-10 h-10 p-2" />
          )}
        </div>

        {/* left section  */}
        <div className=" hidden lg:block">
        <GiHamburgerMenu className="text-xl text-white  w-10 h-10 p-2" />
        </div>
        <div className="flex items-center ml-60 gap-8 lg:hidden">
          <Image className="" src="/logo.png" alt="avater" width={100} height={100}/>
        </div>

        <div className="hidden lg:flex ">
          {/* <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="group relative">
                  <li className="hover:text-primary">{item.title}</li>

                  <span className="w-full h-0.5 absolute bg-primary -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
                </div>
              </Link>
            ))}
          </ul> */}
          <Image src="/logo.png" alt="nav logo" width={200} height={200}/>
        </div>
        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6">
          {/* button start  */}
          <div className="group relative hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-4">
              <button className="border border-white text-white px-6 py-2">Enquire now</button>
            </div>
          </div>
        </div>
      </div>



      {/* mobile responsive section  */}
      <div
        className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]   transition-all bg-white ease-in-out duration-300 transform ${getMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-10 ">
          <ul className=" flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                onClick={() => setMenu(false)}
                href={item.path}
              >
                <li className="hover:text-primary">{item.title}</li>
              </Link>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <button className="border border-primary rounded px-6 py-2">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;