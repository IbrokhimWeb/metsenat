import { FC } from "react";
import Chart, { useChart } from "../";
import { MainChartProps, formatNumber } from "../../../utils";

export const MainChart: FC<MainChartProps> = (props) => {
  const { title, chart } = props;

  const options = useChart({
    labels: chart?.labels,
    plotOptions: { bar: { columnWidth: "16%" } },
    fill: { type: chart?.series.map(({ fill }: { fill: string }) => fill) },
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== "undefined") {
            return formatNumber(+value.toFixed(0)) + " ta";
          }
          return value;
        },
      },
    },
  });

  return (
    <main className="p-5 mt-5 rounded-md bg-white max-xl:mt-3 max-xl:p-3 max-lg:mx-0 max-lg:p-1">
      <section className="w-full h-[470px] p-3 max-[1300px]:h-[400px] max-[600px]:h-[300px] max-[600px]:p-3 max-[450px]:h-[250px]">
        <h1 className="font-bold text-2xl text-[#2E384D] max-[600px]:text-[1rem]">
          {title}
        </h1>
        <Chart
          dir="ltr"
          type="line"
          series={chart?.series?.map((e: { name: string }) => ({
            ...e,
            name: e?.name,
          }))}
          options={options}
          width="100%"
          height="95%"
        />
      </section>
    </main>
  );
};
