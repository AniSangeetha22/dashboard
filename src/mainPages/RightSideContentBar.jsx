import React from "react";
import "./rightsidecontentbar.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../adminPages/Home";
import { AddProduct } from "../adminPages/AddProduct";
import { Products } from "../adminPages/Products";
import { Customers } from "../adminPages/Customers";
import { OnlineShopping } from "../onlinePages/OnlineShopping";
import { AreachartFile } from "../chartPages/AreachartFile";
import { BarchartFile } from "../chartPages/BarchartFile";
import { LinechartFile } from "../chartPages/LinechartFile";
import { Cart } from "../onlinePages/Cart";
import { RegisterFile } from "../registerPages/RegisterFile";
import { LoginFile } from "../registerPages/LoginFile";
export const RightSideContentBar = () => {
  return (
    <div className="right-side-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/onlineshopping" element={<OnlineShopping />} />
        <Route path="/areachartfile" element={<AreachartFile />} />
        <Route path="/barchartfile" element={<BarchartFile />} />
        <Route path="/linechartfile" element={<LinechartFile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginfile" element ={<LoginFile/>}/>
        <Route path="/registerfile" element ={<RegisterFile/>}/>
      
      </Routes>
    </div>
  );
};
