import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import "../adminPages/Home.css";

export const AreaChartHome = () => {
  const {
    products,
    fetchTotalOrders,
    addonlyOrders,
    fetchonlyOrders,
    fetchPosts,
  } = useContext(ProductContext);

  useEffect(() => {
    fetchTotalOrders();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  // const [chartWidth2, setChartWidth2] = useState(
  //   window.innerWidth > 768 ? 600 : 300
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setChartWidth2(window.innerWidth > 768 ? 600 : 300);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  console.log("Bar Chart");
  console.log(addonlyOrders);

  return (
    <div style={{ width: "100%", height: 300 }}>
      {/* // <div className="charth4"> */}
      <h4>AreaChart</h4>
      <ResponsiveContainer>
        {/* <ResponsiveContainer width={600} height={300}> */}
        <AreaChart
          width={600}
          height={300}
          data={products}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="value"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="subamt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
