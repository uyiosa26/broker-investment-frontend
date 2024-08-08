import { Button } from "../ui/button";
import supabase from "@/utils/client";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";

export default function Header() {
  const navigate = useNavigate();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("admin_auth");
    navigate("/admin");
  }

  return (
    <section>
      <div className="container px-[10px] mx-auto pt-[10px]">
        <div className="flex p-[10px]  items-center justify-between">
          <img className="w-[30px] h-auto" src={avatar} alt="avatar" />
          <Button
            className=" bg-red-600 text-white "
            onClick={signOut}
            variant="destructive"
          >
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
}
