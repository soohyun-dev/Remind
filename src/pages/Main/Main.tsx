import { useSelector } from "react-redux";
import { Suspense, useState } from "react";
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
  const [catagory, setCatagory] = useState("진행중");

  const catagoryHandler = (target: string) => {
    switch (target) {
      case "진행중":
        setCatagory("진행중");
        break;
      case "완료":
        setCatagory("완료");
        break;
      case "전체":
        setCatagory("전체");
        break;
      default:
    }
  };

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
          <MainCatagoryButton onClick={() => catagoryHandler("진행중")}>
            진행중
          </MainCatagoryButton>
          <MainCatagoryButton onClick={() => catagoryHandler("완료")}>
            완료
          </MainCatagoryButton>
          <MainCatagoryButton onClick={() => catagoryHandler("전체")}>
            전체
          </MainCatagoryButton>
        </MainCatagoryBox>
        <Suspense fallback={<div>Loading...</div>}>
          {Object.keys(ongoingPosting)
            .filter((key: string) => {
              const { isEnd } = ongoingPosting[+key];
              if (catagory === "진행중") {
                return isEnd === false;
              }
              if (catagory === "완료") {
                return isEnd === true;
              }
              if (catagory === "전체") {
                return true;
              }
              return false;
            })
            .map((key: string) => (
              <Preview
                key={ongoingPosting[+key].id}
                {...ongoingPosting[+key]}
              />
            ))}
        </Suspense>
      </MainSection>
    </Layout>
  );
}
