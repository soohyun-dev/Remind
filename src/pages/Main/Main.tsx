import { useSelector } from "react-redux";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { selectDocId, selectNickname } from "@/feature/userSlice";
import { Layout } from "../Home/Home.styled";
import { MainSection } from "./Main.styled";
import Navbar from "@/components/Navbar";
import useOngoingPosting from "@/hooks/useOngoingPosting";
import Preview from "@/components/Preview";

export default function Main() {
  const nickName = useSelector(selectNickname);
  const docId = useSelector(selectDocId);
  const { data: ongoingPosting } = useOngoingPosting(docId);

  return (
    <Layout>
      <Navbar />
      <MainSection>
        <div>{nickName === null ? "" : <p>{nickName} 님</p>}</div>
        <div>
          <p>현재 진행중인 체험단 목록이에요!</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {Object.keys(ongoingPosting).map((key: string) => (
            <Link to={`/Detail/${key}`} state={{ ...ongoingPosting[+key] }}>
              <Preview
                key={ongoingPosting[+key].id}
                {...ongoingPosting[+key]}
              />
            </Link>
          ))}
        </Suspense>
      </MainSection>
    </Layout>
  );
}
