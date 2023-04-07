import { useSelector } from "react-redux";
import { selectUserEmail } from "@/feature/userSlice";
import { Layout } from "../Home/Home.styled";
import { MainSection } from "./Main.styled";

export default function Main() {
  const user = useSelector(selectUserEmail);

  console.log(user);
  return (
    <Layout>
      <MainSection>
        <div>{user === null ? "" : <p>{user} 님</p>}</div>
      </MainSection>
    </Layout>
  );
}
