import { useSelector } from "react-redux";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { selectDocId, selectNickname } from "@/feature/userSlice";

import {
  MainCatagoryBox,
  MainCatagoryButton,
  MainGuideBox,
  MainIntroduceBox,
  MainSection,
  MainUserBox,
} from "./Main.styled";
import Navbar from "@/components/Navbar";
import useOngoingPosting from "@/hooks/useOngoingPosting";
import Preview from "@/components/Preview";
import { Layout } from "@/styles/style";

export default function Main() {
  const nickName = useSelector(selectNickname);
  const docId = useSelector(selectDocId);
  const { data: ongoingPosting } = useOngoingPosting(docId);

  return (
    <Layout>
      <Navbar />
      <MainSection>
        <MainIntroduceBox>
          <MainUserBox>
            {nickName === null ? "" : <p> 안녕하세요! {nickName} 님</p>}
          </MainUserBox>
          <MainGuideBox>
            <p>현재 진행중인 체험단 목록이에요!</p>
          </MainGuideBox>
        </MainIntroduceBox>
        <MainCatagoryBox>
          <MainCatagoryButton>진행중</MainCatagoryButton>
          <MainCatagoryButton>완료</MainCatagoryButton>
          <MainCatagoryButton>전체</MainCatagoryButton>
        </MainCatagoryBox>
        <Suspense fallback={<div>Loading...</div>}>
          {Object.keys(ongoingPosting).map((key: string) => (
            <Preview key={ongoingPosting[+key].id} {...ongoingPosting[+key]} />
          ))}
        </Suspense>
      </MainSection>
    </Layout>
  );
}
