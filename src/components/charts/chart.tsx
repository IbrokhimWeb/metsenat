//todo Import packages
import ApexChart from "react-apexcharts";

// eslint-disable-next-line
const Chart = ({ ...other }: any) => {
  return <ApexChart {...other} className="my_chart" />;
};

export default Chart;
