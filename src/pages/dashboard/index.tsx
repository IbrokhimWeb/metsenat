import { MainChart } from "../../components/charts/main";
import Navbar from "../../components/navbar";
import Widget from "../../components/widget";

const Deshboard = () => {
  return (
    <main className="w-full h-full">
      <Navbar />
      <section className="w-full py-10 px-40 max-xl:py-5 max-lg:px-10 max-md:px-5">
        <div className="w-full grid grid-cols-3 gap-10 max-xl:gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {[1, 1, 1]?.map((e) => <Widget key={e} />)}
        </div>
        <div className="p-5 mt-10 rounded-md bg-white max-xl:mt-5 max-xl:p-3 max-lg:mx-0 max-lg:p-1">
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
      </section>
    </main>
  );
};

export default Deshboard;
