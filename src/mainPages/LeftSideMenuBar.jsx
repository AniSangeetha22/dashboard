import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./leftsidemenubar.css";
import {
  House,
  ShoppingCart,
  CircleUserRound,
  UsersRound,
  Users,
  ShoppingBasket,
  Store,
  BadgeEuro,
  ChartNoAxesColumnIncreasing,
  ChartLine,
  ChartColumnBig,
  ChartArea,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";

export const LeftSideMenuBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <div className="left-side-menu">
      <div onClick={handleClick} className="menu-btn">
        {open ? (
          <X size={25} color="#aa571c" fill="#aa571c" />
        ) : (
          <Menu size={25} color="#aa571c" fill="#aa571c" />
        )}
      </div>
      <div className={open ? "left-admin-pages active" : "left-admin-pages"}>
        <span>Admin Pages</span>
        <Link onClick={closeMenu} className="link-style" to="/">
          <House size={19} /> <p>Home</p>
        </Link>
        <Link onClick={closeMenu} className="link-style" to="addProduct">
          <ShoppingBasket size={19} /> <p>Add Product</p>
        </Link>
        <Link onClick={closeMenu} className="link-style" to="/products">
          <Store size={19} /> <p>Products</p>
        </Link>
        <Link onClick={closeMenu} className="link-style" to="/customers">
          <Users size={19} /> <p> Customers</p>
        </Link>
        <span>Online Shopping</span>
        <Link onClick={closeMenu} className="link-style" to="/onlineshopping">
          <ShoppingCart size={19} /> <p> Online Shopping</p>
        </Link>
        <span>Charts</span>
        <Link onClick={closeMenu} className="link-style" to="/areachartfile">
          <ChartArea size={19} /> <p>Area Chart</p>
        </Link>
        <Link onClick={closeMenu} className="link-style" to="/barchartfile">
          <ChartColumnBig size={19} /> <p>Bar Chart</p>
        </Link>
        <Link onClick={closeMenu} className="link-style" to="/linechartfile">
          <ChartLine size={19} /> <p>Line Chart</p>
        </Link>
        <span>Register Pages</span>
        <Link onClick={closeMenu} className="link-style" to="/registerfile">
          <ChartArea size={19} /> <p>Register Page</p>
        </Link>
        <Link onClick={closeMenu} className="link-style" to="/loginfile">
          <ChartColumnBig size={19} /> <p>Login Page</p>
        </Link>
      </div>
    </div>
  );
};
