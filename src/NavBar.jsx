import React from "react";
import search from "./assets/Search.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mx-12 h-14  ">
      <div>
        <h1 className="font-bold text-2xl">Logo</h1>
      </div>
      <div className="flex">
        <ul className="flex items-center space-x-5 font-semibold cursor-pointer">
          <li>Acceuil</li>
          <li>A propos</li>
          <li>Nos services</li>
          <li>Evenemtns</li>
          <li>Actualités</li>
          <li>Documentation</li>
          <li>Contact</li>
        </ul>
        <div className="ml-5 flex items-center justify-center gap-2">
          <img
            src={search}
            alt="find"
            className="bg-[#00C8A1] rounded-full p-1 h-7"
          />
          <button className="text-[#FC5A1A] underline font-semibold">
            Se connecter{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
