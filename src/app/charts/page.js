'use client'

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

export default function Charts() {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <ChartCard
          type={"bar"}
          title={"Bar Chart"}
          chartData={barChartDataCategoryOne}
          chartOptions={barChartOptionsCategoryOne}
        />
        <ChartCard
          type={"line"}
          title={"Line Chart"}
          chartData={lineChartData}
          chartOptions={lineChartOptions}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <ChartCard
          type={"pie"}
          title={"Pie Chart"}
          chartData={pieChartData}
          chartOptions={pieChartOptions}
        />
        <ChartCard
          type={"bar"}
          title={"Stacked Chart"}
          chartData={barChartDataCategoryTwo}
          chartOptions={barChartOptionsCategoryTwo}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <ChartCard
          type={"area"}
          title={"Area Chart"}
          chartData={areaChartData}
          chartOptions={areaChartDataOptions}
        />
        <ChartCard
          type={"line"}
          title={"Mixed Chart"}
          chartData={mixedChartData}
          chartOptions={mixedChartDataOptions}
        />
      </div>
    </div>
  );
}
