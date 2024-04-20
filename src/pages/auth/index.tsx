import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/inputs";
import { $axios, LoginState } from "../../utils";
import { ChangeEvent, FormEvent, useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<LoginState>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await $axios.post("/auth/login/", state);

      localStorage.setItem("access", res?.data?.access);
      localStorage.setItem("refresh", res?.data?.refresh);

      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        const error = err as unknown as {
          response: { data: { detail: string } };
        };
        toast.error(error?.response?.data?.detail);
      }
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <img
        src="/images/login.svg"
        alt="Icon"
        className="w-80 my-10 max-md:w-72"
      />

      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-[32px] rounded-[12px] max-md:w-80"
      >
        <h1 className="text-[24px] leading-[28px] font-bold mb-10">Kirish</h1>
        <Input
          type="text"
          title="Login"
          name="username"
          placeholder="Login kiriting"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          title="Password"
          placeholder="Parol kiriting!"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full py-[8px] px-[10px] mt-5 font-medium rounded-md bg-blue-300 text-white"
        >
          Kirish
        </button>
      </form>
    </main>
  );
};

export default Login;
