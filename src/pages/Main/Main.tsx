import { useSelector } from "react-redux";
import { Suspense } from "react";
import { selectDocId, selectNickname } from "@/feature/userSlice";
import { Layout } from "../Home/Home.styled";
import { MainSection } from "./Main.styled";
import Navbar from "@/components/Navbar";
import useOngoingPosting from "@/hooks/useOngoingPosting";

export default function Main() {
  const nickName = useSelector(selectNickname);
  const docId = useSelector(selectDocId);
  const { data: ongoingPosting, isLoading } = useOngoingPosting(docId);
  console.log(ongoingPosting, isLoading);
  return (
    <Layout>
      <Navbar />
      <MainSection>
        <div>{nickName === null ? "" : <p>{nickName} 님</p>}</div>
        <Suspense fallback={<div>Loading...</div>} />
      </MainSection>
    </Layout>
  );
}
