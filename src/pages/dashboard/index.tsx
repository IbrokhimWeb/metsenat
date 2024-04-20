import { chart } from "../../utils";
import Widget from "../../components/widget";
import { Loader } from "../../components/loader";
import { useFetch } from "../../utils/hooks/useFetch";
import { MainChart } from "../../components/charts/main";

const Deshboard = () => {
  const { res, loading } = useFetch(`/dashboard/`, 1);

  if (loading) return <Loader />;

  return (
    <>
      <div className="w-full grid grid-cols-3 gap-10 max-xl:gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {[0, 1, 2]?.map((e, i) => <Widget key={e} index={i} res={res?.data} />)}
      </div>
      <MainChart title="Homiylar va talabalar soni" chart={chart} />
    </>
  );
};

export default Deshboard;
