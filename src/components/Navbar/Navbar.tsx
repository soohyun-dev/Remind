import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSlice } from "@/feature/userSlice";
import { persistor } from "@/main";
import { NavbarSection } from "./Navbar.styled";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const purge = async () => {
    await persistor.purge();
    dispatch(userSlice.actions.logout());
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <NavbarSection>
      <div>네이브바</div>
      <div>
        <button onClick={() => purge()}>로그아웃</button>
      </div>
    </NavbarSection>
  );
}
