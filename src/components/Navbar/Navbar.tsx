import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser, selectUserEmail, userSlice } from "@/feature/userSlice";
import { persistor } from "@/main";
import {
  LogoBox,
  LogoutBox,
  LogoutButton,
  MenuBox,
  MenuFeatureBox,
  MenuItemBox,
  NavbarSection,
} from "./Navbar.styled";

export default function Navbar() {
  const email = useSelector(selectUserEmail);
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
      <LogoBox>
        <Link to="/">
          <p>Remind</p>
        </Link>
      </LogoBox>
      {email === null ? (
        ""
      ) : (
        <MenuFeatureBox>
          <MenuBox>
            <MenuItemBox>
              <Link to="/Main">
                <p>Home</p>
              </Link>
            </MenuItemBox>
            <MenuItemBox>
              <Link to="/Register">
                <p>게시물 등록</p>
              </Link>
            </MenuItemBox>
          </MenuBox>
          <LogoutBox>
            <LogoutButton onClick={() => purge()}>로그아웃</LogoutButton>
          </LogoutBox>
        </MenuFeatureBox>
      )}
    </NavbarSection>
  );
}
