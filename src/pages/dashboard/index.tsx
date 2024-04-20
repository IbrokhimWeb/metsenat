import { MainChart } from "../../components/charts/main";
import { Loader } from "../../components/loader";
import Widget from "../../components/widget";
import { useFetch } from "../../utils/hooks/useFetch";
import { chart } from "../../utils";

const Deshboard = () => {
  const { res, loading } = useFetch(`/dashboard/`, 1);

  if (loading) {
    <Loader />;
  }

  return (
    <div>
      <div className="w-full grid grid-cols-3 gap-10 max-xl:gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {[0, 1, 2]?.map((e, i) => <Widget key={e} index={i} res={res?.data} />)}
      </div>
      <div className="p-5 mt-10 rounded-md bg-white max-xl:mt-5 max-xl:p-3 max-lg:mx-0 max-lg:p-1">
        <MainChart
          title="Homiylar va talabalar soni"
          subheader=""
          chart={chart}
        />
      </div>
    </div>
  );
};

export default Deshboard;
