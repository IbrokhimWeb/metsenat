import { useParams } from "react-router-dom";

const Sponsor = () => {
  const { id } = useParams();

  return <main>Sponsor: #{id}</main>;
};

export default Sponsor;
