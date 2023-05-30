"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./Header.css";
import Login from "../Login/Login";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false)

    console.log(openLogin)

  return (
    <>
      <nav className="flex">
        <div className="w-10/12 flex justify-between m-auto py-4">
          <ul className="gap-5 flex">
            <li>
              <Link href="/" className="linkMenu">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/profile" className="linkMenu">
                Mi Gallería
              </Link>
            </li>
          </ul>
          <button
            className="linkMenu buttonMenu"
            onClick={() => setOpenLogin(!openLogin)}
          >
            Registrarse
          </button>
        </div>
      </nav>
      {openLogin ? <Login openLogin={openLogin} setOpenLogin={setOpenLogin} /> : <></>}
    </>
  );
};

export default Header;
