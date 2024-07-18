import { Button } from "./ui/button";
import supabase from "../../utils/client.js";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const isAuthorized = localStorage.getItem("auth");
  //   console.log(isAuthorized);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("auth");
    navigate("/");
  }

  return (
    <section>
      <div className="container mx-auto pt-[10px]">
        <div className="flex p-[10px]  items-center justify-between">
          <img className="w-[30px] h-auto" src="/img/avatar.png" alt="avatar" />
          {/* <button className="py-[5px] rounded-md bg-green-700 text-white px-[20px]">
            Logout
          </button> */}
          <Button onClick={signOut} variant="destructive">
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
}
