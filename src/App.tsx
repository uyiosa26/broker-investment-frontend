import supabase from "../utils/client.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./components/ui/button.js";
export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) return navigate("/dashboard");
  }, []);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function Login(event) {
    event.preventDefault();
    setLoading(true);
    const { error, user } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(user);
    if (error) {
      setLoading(false);
      return alert("Invalid Credentials");
    }
    setLoading(false);
    if (error) console.log(error);
    localStorage.setItem("auth", "authenticated");
    navigate("/dashboard");
  }

  return (
    <main className="text-[16px] text-[#111] h-screen bg-[#fafafa]">
      <div className="container px-[10px] mx-auto">
        <form onSubmit={Login} className="mt-[10rem] w-[600px] mx-auto">
          <div className="mb-[20px]">
            <label className="font-[600]" htmlFor="email">
              Email
            </label>
            <input
              className="w-full text-[#111] p-[10px] mt-[10px] border-[1px] border-black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            {/* <button
              type="submit"
              className="uppercase py-[12px] rounded-md text-white border-none outline-none bg-green-700 px-[80px] w-fit text-[14px] font-[500]"
            >
              login
            </button> */}
            <Button>
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
