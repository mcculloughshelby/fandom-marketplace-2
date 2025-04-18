"use client"
import {useState, useContext,useEffect} from "react";
import { useRouter } from "next/navigation";
import {MyContext} from "./MyContext";
//***********Icon Imports***************** */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
    faTornado,
    faShieldHalved,
    faWater,
    faGavel,
    faBomb
} from "@fortawesome/free-solid-svg-icons";
//this is for the icons
const navItems = [
    { name: "Twister", icon: faTornado },
    { name: "Shield", icon: faShieldHalved },
    { name: "Water", icon: faWater },
    { name: "Gavel", icon: faGavel },
    { name: "Bomb", icon: faBomb }
];
//*********************************** */
export default function NavBar(){
const {userRole, upDateRole}=useContext(MyContext);
  //const { booklist,logStatus,setLogStatus } = useContext(DataContext);
const [uname,setUname]=useState("");

const [pwd, setPwd]=useState("");
const[logStatus, setLogStatus]=useState(0);
useEffect(()=>{
  if(sessionStorage.getItem("logValue")!=null){
    setLogStatus(sessionStorage.getItem("logValue"));
  }
}, [logStatus, userRole]);

function check(){
  if(uname.trim()==="admin"  && pwd.trim() === "test")
{
  setLogStatus(2)
    sessionStorage.setItem("logValue",2);
    upDateRole(2);
  }
 
    

if(uname.trim()==="user1"  && pwd.trim() === "test")
  sessionStorage.setItem("logValue",1);
setLogStatus(1)
upDateRole(1);

}

function logout(){
 sessionStorage.setItem("cart",JSON.stringify([]));
 sessionStorage.setItem("logValue",0);

 setLogStatus(0)
 updateRole(0);
 //setlogin(0);

}

const loginForm = (
    <div className="flex flex-col gap-2 text-sm bg-[#FAF3E0] p-4 rounded-md shadow-md">
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
    </div>
  )

  const logoutUser = (
    <div className="flex flex-col items-start gap-2 text-sm bg-[#F7F7F7] p-4 rounded-md shadow-md">
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
    <div className="grid grid-cols-6 bg-[#FFE9C6] text-[#3D405B] text-lg px-10 py-6 font-semibold gap-4 items-center">
      <a href="/Home" className="hover:text-[#FF6B6B]"> Home</a>
      <a href="/listings" className="hover:text-[#FF6B6B]"> Listings</a>
      <a href="/contactus" className="hover:text-[#FF6B6B]"> Contact Us</a>
      <a href="/chatbot" className="hover:text-[#FF6B6B]"> Ask A Question</a>
      <div>
        {logStatus === 2 && (
          <a href="/addBook" className="hover:text-[#FF6B6B]">➕ Add New Listing</a>
        )}
      </div>
      <div>
        {logStatus === 0 ? loginForm : logoutUser}
      </div>
    </div>
  )
}