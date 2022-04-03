import React from "react";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h2 className="text-white">Case</h2>
      </div>
      <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
        {["Welcome", "Market", "Profile"].map((item, index) => {
          <NavbarItem
            key={item + index}
            title={item}
            classProps="my-2 text-lg"
          />;
        })}
        <li className="bg-[#1e43c9] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
