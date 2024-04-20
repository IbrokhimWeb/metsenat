//todo Import components
import { FC } from "react";
import Chart, { useChart } from "../../charts";

interface CustomProps {
  title: string;
  chart: {
    labels: Array<string>;
    series: Array<{
      name: string;
      type: string;
      fill: string;
      data: Array<number>;
    }>;
  };
  subheader: string;
}

export const MainChart: FC<CustomProps> = (props) => {
  const { title, subheader, chart } = props;

  const options = useChart({
    plotOptions: {
      bar: {
        columnWidth: "16%",
      },
    },
    fill: {
      type: chart?.series.map(({ fill }: { fill: string }) => fill),
    },
    labels: chart?.labels,
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== "undefined") {
            return `${value.toFixed(0)} ${"amount"}`;
          }
          return value;
        },
      },
    },
  });

  return (
    <div className="w-full h-[470px] p-5 max-[1300px]:h-[400px] max-[600px]:h-[300px] max-[600px]:p-3 max-[450px]:h-[250px]">
      <section>
        <h1 className="max-[600px]:text-[1rem]">{title}</h1>
        <p className="text-[1rem] max-[1500px]:text-[0.8rem] max-[600px]:text-[0.6rem]">
          {subheader}
        </p>
      </section>
      <Chart
        dir="ltr"
        type="line"
        series={chart?.series?.map((e: { name: string }) => ({
          ...e,
          name: e.name,
        }))}
        options={options}
        width="100%"
        height="95%"
      />
    </div>
  );
};
