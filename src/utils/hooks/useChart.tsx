//todo Import packages
import merge from "lodash/merge";

// eslint-disable-next-line
const Chart = (options: any) => {
  //

  const baseOptions = {
    colors: ["#FF92AE", "#747EFA"],
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: false },
    },
    states: {
      hover: { filter: { type: "lighten", value: 0.04 } },
      active: { filter: { type: "darken", value: 0.88 } },
    },
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    stroke: { width: 3, curve: "smooth", lineCap: "round" },
    grid: {
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
    },
    xaxis: { axisBorder: { show: false }, axisTicks: { show: false } },
    markers: { size: 0 },
    tooltip: { theme: false, x: { show: true } },
    legend: {
      show: true,
      fontSize: 13,
      position: "top",
      horizontalAlign: "right",
      markers: { radius: 12 },
      fontWeight: 500,
      itemMargin: { horizontal: 8 },
    },
    plotOptions: {
      bar: {
        borderRadius: 1,
        columnWidth: "28%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
      pie: {
        donut: {
          labels: {
            show: true,
            value: { offsetY: 8 },
            total: { show: true, label: "Total" },
          },
        },
      },
      radialBar: {
        track: { strokeWidth: "100%" },
        dataLabels: {
          value: { offsetY: 8 },
          total: { show: true, label: "Total" },
        },
      },
      radar: { polygons: { fill: { colors: ["transparent"] } } },
    },

    responsive: [
      { options: { plotOptions: { bar: { columnWidth: "40%" } } } },
      { options: { plotOptions: { bar: { columnWidth: "32%" } } } },
    ],
  };

  return merge(baseOptions, options);
};

export default Chart;
