import Image from "next/image";

import { ItemMenu } from "@/components/NavBar/ItemMenu";
import navicon from "@/assets/navicon.png";

export function NavBar() {
  return (
    <nav className="bg-black">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white">
                *LOGO*
              </a>
            </div>
          </div>
          <div className="hidden md:block text-white">
            <div className="ml-10 flex items-baseline space-x-4 ">
              <ul className="flex">
                <li className="houver:bg-white houver:text-black routed-lg p-2 text-green-300">
                  <ItemMenu name="Home" />
                </li>
                <li className="houver:bg-white houver:text-black routed-lg p-2">
                  <ItemMenu name="About Us" />
                </li>
                <li className="houver:bg-white houver:text-black routed-lg p-2">
                  <ItemMenu name="Contact" />
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center ${}">
            <button className="mobile-menu-button">
              <Image
                src={navicon}
                alt="menu"
                width={20}
                height={10}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
