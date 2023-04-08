import { useSelector } from "react-redux";
import { Suspense } from "react";
import { selectDocId, selectNickname } from "@/feature/userSlice";
import { Layout } from "../Home/Home.styled";
import { MainSection } from "./Main.styled";
import Navbar from "@/components/Navbar";
import useOngoingPosting from "@/hooks/useOngoingPosting";
import Preview from "@/components/Preview";

interface Posting {
  id?: string;
  place?: string;
  registerDate?: {
    seconds: number;
    nanoseconds: number;
  };
  reviewDate?: string;
  provider?: string;
  site?: string;
  submitDate?: string;
  support?: string;
}

export default function Main() {
  const nickName = useSelector(selectNickname);
  const docId = useSelector(selectDocId);
  const { data: ongoingPosting }: { data?: Posting } = useOngoingPosting(docId);

  return (
    <Layout>
      <Navbar />
      <MainSection>
        <div>{nickName === null ? "" : <p>{nickName} 님</p>}</div>
        <Suspense fallback={<div>Loading...</div>}>
          {Object.keys(ongoingPosting).map((key, idx) => (
            <Preview
              id={ongoingPosting[key].id}
              place={ongoingPosting[key].place}
              registerDate={ongoingPosting[key].registerDate}
              reviewDate={ongoingPosting[key].reviewDate}
              provider={ongoingPosting[key].provider}
              site={ongoingPosting[key].site}
              submitDate={ongoingPosting[key].submitDate}
              support={ongoingPosting[key].support}
            />
          ))}
        </Suspense>
      </MainSection>
    </Layout>
  );
}
