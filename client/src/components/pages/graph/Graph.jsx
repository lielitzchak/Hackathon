import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./graph.css";
import AddJob from "../addJob/addJob";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["CV send", "Hr Interview", "professional Interview", "Denial"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 8, 4, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.3)",
        "rgba(54, 162, 235, 0.3)",
        "rgba(255, 206, 86, 0.3)",
        "rgba(75, 192, 192, 0.3)",
        "rgba(153, 102, 255, 0.3)",
        "rgba(255, 159, 64, 0.3)",
      ],
      borderColor: [
        "rgba(255, 99, 132,1.5)",
        "rgba(54, 162, 235,1.5)",
        "rgba(255, 206, 86,1.5)",
        "rgba(75, 192, 192,1.5)",
        "rgba(153, 102, 255,1.5)",
        "rgba(255, 159, 64,1.5)",
      ],
      borderWidth: 0.5,
    },
  ],
};

const Graph = () => {
  return (
    <>
      <Pie data={data} className="pie-graph" />
    </>
  );
};

export default Graph;
