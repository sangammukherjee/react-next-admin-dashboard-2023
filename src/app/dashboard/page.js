"use client";

import { MdReport, MdTask } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import { LuFolderKanban } from "react-icons/lu";
import Widget from "@/components/widget";
import ChartCard from "@/components/charts/chart-card";
import {
  areaChartData,
  areaChartDataOptions,
  barChartDataCategoryOne,
  barChartDataCategoryTwo,
  barChartOptionsCategoryOne,
  barChartOptionsCategoryTwo,
  lineChartData,
  lineChartOptions,
  mixedChartData,
  mixedChartDataOptions,
  pieChartData,
  pieChartOptions,
} from "@/utils/chart-data";
import Reports from "../reports/page";
import Tasks from "../tasks/page";
import Kanban from "../kanban/page";
import { useContext } from "react";
import { GlobalContext } from "@/context";

export default function Dashboard() {
  const { allReportsData, allTasks } = useContext(GlobalContext);

  const widgetData = [
    {
      title: "Reports",
      subtitle: (allReportsData && allReportsData.length) || 0,
      icon: <MdReport className="h-7 w-7" />,
    },
    {
      title: "Tasks",
      subtitle: (allTasks && allTasks.length) || 0,
      icon: <MdTask className="h-7 w-7" />,
    },
    {
      title: "Sales",
      subtitle:
        allReportsData && allReportsData.length
          ? allReportsData.reduce(
              (curr, item) => curr + parseInt(item.sales),
              0
            )
          : 0,
      icon: <BiMoneyWithdraw className="h-7 w-7" />,
    },
    {
      title: "Visitors",
      subtitle:
        allReportsData && allReportsData.length
          ? allReportsData.reduce(
              (curr, item) => curr + parseInt(item.visitors),
              0
            )
          : 0,
      icon: <BsFillPersonCheckFill className="h-7 w-7" />,
    },
    {
      title: "Revenue",
      subtitle:
        allReportsData && allReportsData.length
          ? allReportsData.reduce(
              (curr, item) => curr + parseInt(item.revenue),
              0
            )
          : 0,
      icon: <FaMoneyBillWave className="h-7 w-7" />,
    },
    {
      title: "Board",
      subtitle: "4",
      icon: <LuFolderKanban className="h-7 w-7" />,
    },
  ];

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {widgetData.map((widgetItem) => (
          <Widget
            title={widgetItem.title}
            subtitle={widgetItem.subtitle}
            icon={widgetItem.icon}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <ChartCard
          title={"Sales Analytics"}
          chartData={lineChartData}
          chartOptions={lineChartOptions}
          type={"line"}
        />
        <ChartCard
          title={"Revenue Analytics"}
          chartData={barChartDataCategoryOne}
          chartOptions={barChartOptionsCategoryOne}
          type={"bar"}
        />
        <ChartCard
          title={"Visitors Analytics"}
          chartData={areaChartData}
          chartOptions={areaChartDataOptions}
          type={"area"}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <ChartCard
          title={"Traffic Analytics"}
          chartData={barChartDataCategoryTwo}
          chartOptions={barChartOptionsCategoryTwo}
          type={"bar"}
        />
        <ChartCard
          title={"Tasks Analytics"}
          chartData={pieChartData}
          chartOptions={pieChartOptions}
          type={"pie"}
        />
        <ChartCard
          title={"Mixed Analytics"}
          chartData={mixedChartData}
          chartOptions={mixedChartDataOptions}
          type={"line"}
        />
      </div>
      <div className="mt-5">
        <Reports />
      </div>
      <div className="mt-5">
        <Tasks />
      </div>
      <div className="mt-5 mb-10">
        <Kanban />
      </div>
    </div>
  );
}
