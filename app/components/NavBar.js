"use client"
import {useState, useContext, useEffect} from "react";
import { AuthContext } from "./AuthContext";
// Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTornado, faShieldHalved, faWater, faGavel, faBomb,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { name: "Home", icon: faTornado, href: "/" },
  { name: "Listings", icon: faShieldHalved, href: "/listings" },
  { name: "Contact Us", icon: faWater, href: "/contactus" },
  { name: "Ask A Question", icon: faGavel, href: "/chatbot" },
  { name: "About Us", icon: faBomb, href: "/aboutus" }



];

export default function NavBar() {
  const { userRole, upDateRole } = useContext(AuthContext);
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [logStatus, setLogStatus] = useState(0);

  useEffect(() => {
    if(sessionStorage.getItem("logValue")!=null){
      setLogStatus(Number(sessionStorage.getItem("logValue")));
    }
  }, []);

  function check() {
    if(uname.trim()==="admin" && pwd.trim() === "test") {
      setLogStatus(2)
      sessionStorage.setItem("logValue",2);
      upDateRole(2);
    } else if(uname.trim()==="user1" && pwd.trim() === "test1") {
      setLogStatus(1)
      sessionStorage.setItem("logValue",1);
      upDateRole(1);
    }
  }

  function logout() {
    sessionStorage.setItem("cart", JSON.stringify([]));
    sessionStorage.setItem("logValue", 0);
    setLogStatus(0)
    upDateRole(0);
  }

  const loginForm = (
    <div className="flex flex-col gap-2 text-sm bg-[#FAF3E0] p-4 rounded-md shadow-md min-w-[200px]">
      <label className="text-[#3D405B] font-semibold">Please Enter Username:</label>
      <input
        className="border border-[#26547C] rounded px-2 py-1"
        type="text"
        id="uname"
        value={uname}
        onChange={(e) => setUname(e.target.value)}
      />
      <label className="text-[#3D405B] font-semibold">Please Enter Password:</label>
      <input
        className="border border-[#26547C] rounded px-2 py-1"
        type="password"
        id="pwd"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button
        className="bg-[#FF6B6B] text-white px-4 py-1 rounded hover:bg-[#EF476F]"
        onClick={check}
      >
        Login
      </button>
      <a href="/create" className="text-[#26547C] hover:text-[#FF6B6B] underline">
        Create Account
      </a>
    </div>
  )

  const logoutUser = (
    <div className="flex flex-col items-start gap-2 text-sm bg-[#F7F7F7] p-4 rounded-md shadow-md min-w-[200px]">
      <a className="text-[#26547C] hover:text-[#FF6B6B] underline" href="/cart">
        🛒 Your Cart
      </a>
      <button
        className="bg-[#FF6B6B] text-white px-4 py-1 rounded hover:bg-[#EF476F]"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  )

  return (
    <div className="grid grid-cols-6 md:grid-cols-10 bg-[#FFE9C6] text-[#3D405B] text-lg px-10 py-6 font-semibold gap-4 items-center">
      {navItems.map((item, idx) => (
        <a key={idx} href={item.href} className="flex items-center gap-1 hover:text-[#FF6B6B]">
          <FontAwesomeIcon icon={item.icon} />
          {item.name}
        </a>
      ))}
      {(logStatus === 1 || logStatus === 2) && (
      <>
        <a href="/otherprofiles" className="flex items-center gap-1 hover:text-[#FF6B6B]">
          <FontAwesomeIcon icon={faUser} /> 
          Other Profiles
        </a>
        <a href="/messages" className="flex items-center gap-1 hover:text-[#FF6B6B]">
          <FontAwesomeIcon icon={faGavel} />
          Messages
        </a>
        <a href="/create" className="flex items-center gap-1 hover:text-[#FF6B6B]">
          <FontAwesomeIcon icon={faBomb} />
          Create Listing
        </a>
        <a href="/profile" className="flex items-center gap-1 hover:text-[#FF6B6B]">
          <FontAwesomeIcon icon={faUser} /> 
          Profile
        </a>
      </>
    )}

      {logStatus === 2 && (
        <a 
          href="/admin"
        className="flex items-center gap-1 hover:text-[#FF6B6B]">
          
          <FontAwesomeIcon icon={faUser} />
          Admin Panel
          </a> 
          )}
      

      <div className="col-span-1 justify-self-end text-right">
        {logStatus === 0 ? loginForm : logoutUser}
      </div>
    </div>
  );
}



