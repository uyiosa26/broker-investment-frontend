// "use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import supabase from "@/utils/client";
import { useNavigate } from "react-router-dom";

export default function AdminAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth) return navigate("/admin-dashboard");
  }, []);

  const [loading, setLoading] = useState(false);

  async function Login(event) {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);

    const email = formdata.get("email");
    const password = formdata.get("password");

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setLoading(false);
      return alert("Invalid Credentials");
    }
    setLoading(false);
    if (error) console.log(error);
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
              Email
            </label>
            <input
              className="w-full text-[#111] p-[10px] mt-[10px] border-[1px] border-black"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
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
            <Button className="bg-black text-white">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Login
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
