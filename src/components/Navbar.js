import React from "react";
import logo from "../assets/CallBuddy-logos/CallBuddy-logos_white.png";
const Navbar = () => {
  return (
    <div className="bg-black/90 h-[6rem] flex items-center justify-between">
      {/*Left  */}
      <div className="flex items-center">
        <div className="w-[6rem] h-[6rem] flex">
          <img src={logo} alt="" className="object-cover rounded-full" />
        </div>
        {/* <div className="text-white">
          <p className="text-[20px]">Video Call App</p>
        </div> */}
      </div>

      {/*Right  */}
      <div className="">
        <ul className="text-white flex items-center gap-4 mr-5">
          <li>About Us</li>
          <li>Product</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
