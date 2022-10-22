import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link className=" normal-case text-xl">
            <img className="w-32 " src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link>News</Link>
            </li>
            <li tabIndex={0}>
              <Link>Destination</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contuct</Link>
            </li>
            <li>
              <button className="w-20 h-9 bg-warning  my-auto">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
