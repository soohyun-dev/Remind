import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { selectUserEmail } from "@/feature/userSlice";
import { Layout } from "@/styles/style";
import {
  HomeGuideBox,
  HomeGuideParagraph,
  HomeLoginBox,
  HomeLoginButton,
  HomeLogoBox,
  HomeLogoParagraph,
  HomeSection,
  HomeSignUpBox,
  HomeSignUpParagraph,
} from "./Home.styled";

function Home() {
  const user = useSelector(selectUserEmail);
  return (
    <Layout>
      <HomeSection>
        <Fade direction="up" duration={2000}>
          <HomeGuideBox>
            <HomeGuideParagraph>
              체험단/협찬을 기록하고 관리하는 서비스
            </HomeGuideParagraph>
          </HomeGuideBox>
          <HomeLogoBox>
            <HomeLogoParagraph>Remind</HomeLogoParagraph>
          </HomeLogoBox>
        </Fade>
        <HomeLoginBox>
          {user === null ? (
            <Link to="/Login">
              <HomeLoginButton>로그인</HomeLoginButton>
            </Link>
          ) : (
            <Link to="Main">
              <HomeLoginButton>메인으로</HomeLoginButton>
            </Link>
          )}
        </HomeLoginBox>
        <HomeSignUpBox>
          <Link to="/SignUp">
            <HomeSignUpParagraph>처음 오셨나요? </HomeSignUpParagraph>
          </Link>
        </HomeSignUpBox>
      </HomeSection>
    </Layout>
  );
}

export default Home;
