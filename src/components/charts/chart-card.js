"use client";

import Card from "../card";
import { MdBarChart } from "react-icons/md";
import ChartLayout from "./chart-layout";

export default function ChartCard({ type, title, chartData, chartOptions }) {
  return (
    <Card
      addtionalStyles={
        "flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center"
      }
    >
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          {title}
        </h2>
        <button className="z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 !transition !duration-200 hover:bg-gray-200 dark:bg-navy-700 text-[#ffc46b]">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>
      <div
        className="md
      mt-16 lg:mt-0"
      >
        <div className="h-[250px] w-full xl:h-[350px]">
          <ChartLayout
            type={type}
            chartData={chartData}
            chartOptions={chartOptions}
          />
        </div>
      </div>
    </Card>
  );
}
