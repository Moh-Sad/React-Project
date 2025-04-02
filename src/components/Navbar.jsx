import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between item-center h-24 max-w-[1240px] mx-auto p-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div>
        <AiOutlineMenu size={30} />
      </div>

      <div className="fixed pt-4 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500">
      <h1 className="w-full pb-10 text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
