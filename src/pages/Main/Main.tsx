import { useSelector } from "react-redux";
import { selectUserEmail } from "@/feature/userSlice";
import { Layout } from "../Home/Home.styled";
import { MainSection } from "./Main.styled";
import Navbar from "@/components/Navbar";

export default function Main() {
  const user = useSelector(selectUserEmail);

  console.log(user);
  return (
    <Layout>
      <Navbar />
      <MainSection>
        <div>{user === null ? "" : <p>{user} 님</p>}</div>
      </MainSection>
    </Layout>
  );
}
