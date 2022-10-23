import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const DarkHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  return (
    <div className="absolute top-0 ml-6 mt-3">
      <div className="navbar container w-screen  text-black">
        <div className="flex-1">
          <Link to="/" className=" normal-case ">
            <img className="w-32 " src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none ml-auto">
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
              {user ? (
                <Link className="font-bold text-lg">{user?.displayName}</Link>
              ) : (
                <Link to="/login">
                  <button className="px-5 ml-3 h-9 bg-warning  rounded font-semibold text-black my-auto">
                    Login
                  </button>
                </Link>
              )}
            </li>
            {user && (
              <button onClick={handleLogOut} className="px-5 ml-3 h-9 bg-warning  rounded font-semibold text-black my-auto">
                LogOut
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DarkHeader;
