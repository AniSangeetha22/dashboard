import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import "../adminPages/Home.css";

export const LineChartHome = () => {
  const {
    fetchTotalOrders,

    fetchPosts,

    addonlyOrders,
  } = useContext(ProductContext);

  useEffect(() => {
    fetchTotalOrders();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, []);

  // const [chartWidth, setChartWidth] = useState(
  //   window.innerWidth > 768 ? 600 : 300
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setChartWidth(window.innerWidth > 768 ? 600 : 300);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  console.log("Bar Chart");
  console.log(addonlyOrders);
  return (
      <div style={{ width: "100%", height: 300 }}>
    {/* // <div className="charth4"> */}
      <h4>LineChart</h4>
      <ResponsiveContainer  >
        <LineChart
          width={600}
          height={300}
          data={addonlyOrders}
          margin={{
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="amt" fill="#blue" />
          <Line dataKey="value" fill="red" />
          <Line dataKey="subamt" fill="#8b5cf6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
