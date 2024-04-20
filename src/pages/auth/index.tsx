import { ChangeEvent, FormEvent, useState } from "react";
import { $axios } from "../../utils";
import { Input } from "../../components/inputs";
import { useNavigate } from "react-router-dom";

interface CustomState {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<CustomState>({
    username: "",
    password: "",
  });

  const tokens = {
    refresh:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxMzY1MTc1MywianRpIjoiMjgwN2Y2N2JjMjY1NDI0NmI0OWEzNGE4MTE0NzNlZDYiLCJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im1ldHNlbmF0YWRtaW4ifQ.f2a4CcH1LTmxcWzECcy9B6uJ1DTz2viEzO_qtrJDw1Q",
    access:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNTY1NjUzLCJqdGkiOiIxNzZlMTlhMzQxMjI0NTMzOTA0MmUyOWE5MGFhMzAyNCIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoibWV0c2VuYXRhZG1pbiJ9.LORRVm6_G3UV-UPFsHVTwrOm8rt_f8SWE47MY79YW_k",
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("access", tokens?.access);
    localStorage.setItem("refresh", tokens?.refresh);

    try {
      const res = await $axios.post("/auth/login", state);

      console.log(res);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
    navigate("/");
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <img src="/images/login.svg" alt="Icon" className="my-10" />

      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-[32px] rounded-[12px]"
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
