//todo Import packages
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <img
        src={`/images/404.png`}
        className="w-[25em] mb-10 max-[450px]:w-[18em]"
      />
      <h1 className="w-full text-center text-[2.2em] max-[450px]:text-[2em]">
        404: Siz qidirayotgan sahifa bu yerda mavjud emas
      </h1>
      <p className="w-full text-center px-10">
        Siz yo noaniq yo'lni sinab ko'rdingiz yoki bu erga noto'g'ri keldingiz.
        Qaysi biri bo'lishidan qat'iy nazar, navigatsiyadan foydalanib ko'ring.
      </p>
      <button
        color="info"
        className="px-10 mt-12 font-bold text-[#2e5bff]"
        onClick={() => navigate("/")}
      >
        Asosiy saxifaga qaytish
      </button>
    </main>
  );
};

export default Error404;
