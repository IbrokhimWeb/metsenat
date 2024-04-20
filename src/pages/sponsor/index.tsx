import { useParams } from "react-router-dom";

const Sponsor = () => {
  const { id } = useParams();

  return <div>Sponsor: #{id}</div>;
};

export default Sponsor;
