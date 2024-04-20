import { MainChart } from "../../components/charts/main";

const Deshboard = () => {
  return (
    <main>
      <div className="mx-52 p-2 rounded-md bg-white">
        <MainChart
          title="Homiylar va talabalar soni"
          subheader=""
          chart={{
            labels: [
              "01/01/2024",
              "02/01/2024",
              "03/01/2024",
              "04/01/2024",
              "05/01/2024",
              "06/01/2024",
              "07/01/2024",
              "08/01/2024",
              "09/01/2024",
              "10/01/2024",
              "11/01/2024",
              "12/01/2024",
            ],
            series: [
              {
                name: "Talabalar",
                type: "area",
                fill: "gradient",
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 50],
              },
              {
                name: "Homiylar",
                type: "area",
                fill: "gradient",
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 60],
              },
            ],
          }}
        />
      </div>
    </main>
  );
};

export default Deshboard;
