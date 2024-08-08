import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const dbPassword = import.meta.env.VITE_ADMIN_PASSWORD;
const dbUserName = import.meta.env.VITE_ADMIN_USERNAME;

export default function AdminAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth) return navigate("/admin-dashboard");
  }, []);

  function Login(event) {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);

    const username = formdata.get("username");
    const password = formdata.get("password");

    if (dbPassword !== password && dbUserName !== username)
      return alert("Invalid credentials");
    localStorage.setItem("admin_auth", "authenticated");
    navigate("/admin-dashboard");
  }

  return (
    <main className="text-[16px] text-[#111]">
      <div className="container px-[10px] mx-auto">
        <form onSubmit={Login} className="mt-[10rem] lg:w-[600px] mx-auto">
          <h1 className="text-center text-black font-bold mb-4 text-xl capitalize">
            admin login
          </h1>
          <div className="mb-[20px]">
            <label className="font-[600]" htmlFor="email">
              Username
            </label>
            <input
              className="w-full text-[#111] p-[10px] mt-[10px] border-[1px] border-black"
              type="text"
              name="email"
              placeholder="Enter Your Username"
              id="username"
              required
            />
          </div>
          <div className="mb-[50px]">
            <label className="font-[600]" htmlFor="password">
              Password
            </label>
            <input
              className="w-full text-[#111] p-[10px] bg-transparent mt-[10px] border-[1px] border-black"
              type="password"
              placeholder="Enter Your Password"
              required
              name="password"
              id="password"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <Button className="bg-black text-white">Login</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
