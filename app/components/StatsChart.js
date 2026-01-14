"use client";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function StatsChart({ pokemon }) {
  const labels = pokemon.stats.map((s) => s.stat.name.toUpperCase());
  const values = pokemon.stats.map((s) => s.base_stat);

  const data = {
    labels,
    datasets: [
      {
        label: pokemon.name,
        data: values,
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        borderColor: "rgba(239, 68, 68, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(239, 68, 68, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(239, 68, 68, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 150,
        ticks: { display: false }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <Radar data={data} options={options} />
    </div>
  );
}