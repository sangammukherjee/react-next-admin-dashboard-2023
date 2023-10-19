export const barChartDataCategoryOne = [
  {
    name: "Bar Chart",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsCategoryOne = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#FF9B05",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#FFC46B",

            opacity: 0.8,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

export const pieChartOptions = {
  labels: ["One", "Two", "Three"],
  colors: ["#FF9B05", "#FFC46B", "#EFF4FB"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#FF9B05", "#FFC46B", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export const pieChartData = [63, 25, 12];

export const barChartDataCategoryTwo = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#FF9B05",
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#FFC46B",
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#EFF4FB",
  },
];

export const barChartOptionsCategoryTwo = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  // colors:['#ff3322','#faf']
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

export const lineChartData = [
  {
    name: "Profit",
    data: [30, 40, 24, 46, 20, 46],
    color: "#FF9B05",
  },
  {
    name: "Revenue",
    data: [50, 64, 48, 66, 49, 68],
    color: "#FFC46B",
  },
];

export const lineChartOptions = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  },

  yaxis: {
    show: false,
  },
};

export const areaChartData = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109],
    color: "#FFC46B",
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52],
    color: "#FF9B05",
  },
];

export const areaChartDataOptions = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  },

  yaxis: {
    show: false,
  },
};

export const mixedChartData = [
  {
    name: "TEAM A",
    type: "column",
    data: [23, 11, 22, 27, 13, 22],
    color: "#FF9B05",
  },
  {
    name: "TEAM B",
    type: "area",
    data: [44, 55, 41, 67, 22, 43],
    color: "#EFF4FB",
  },
  {
    name: "TEAM C",
    type: "line",
    data: [30, 25, 36, 30, 45, 35],
    color: "#FFC46B",
  },
];

export const mixedChartDataOptions = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  },

  yaxis: {
    show: false,
  },
};
