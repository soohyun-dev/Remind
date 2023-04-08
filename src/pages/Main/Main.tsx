import { useSelector } from "react-redux";
import { selectNickname } from "@/feature/userSlice";
import { Layout } from "../Home/Home.styled";
import { MainSection } from "./Main.styled";
import Navbar from "@/components/Navbar";

export default function Main() {
  const nickName = useSelector(selectNickname);

  console.log(nickName);
  return (
    <Layout>
      <Navbar />
      <MainSection>
        <div>{nickName === null ? "" : <p>{nickName} 님</p>}</div>
      </MainSection>
    </Layout>
  );
}
