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
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";

export const LinechartFile = () => {
  const {
    totalorders,
    fetchTotalOrders,

    fetchPosts,
    fetchonlyOrders,
    addonlyOrders,
  } = useContext(ProductContext);
  useEffect(() => {
    fetchonlyOrders();
  }, []);
  useEffect(() => {
    fetchTotalOrders();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log("Line Chart");
  console.log(totalorders);

  return (
    <div
      style={{
        marginTop: "80px",
        width: "100%",
        height: "60%",
        position: "absolute",
      }}
    >
      <h3
        style={{
          marginTop: "60px",
          marginBottom: "25px",

          color: "#bc6c25",
        }}
      >
        Line Chart{" "}
      </h3>
      <ResponsiveContainer>
        <LineChart
          width="100%"
          height="80%"
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
          <Line dataKey="amt" fill="#2563eb" />
          <Line dataKey="value" fill="#264653" />
          <Line dataKey="subamt" fill="#8b5cf6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
