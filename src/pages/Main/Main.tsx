import { useSelector } from "react-redux";
import { Suspense, useState } from "react";
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
import { CONSTANT, GUIDE } from "@/constant/constant";

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
            <p>{GUIDE.PROCEDDING}</p>
          </MainGuideBox>
        </MainIntroduceBox>
        <MainCatagoryBox>
          <MainCatagoryButton
            onClick={() => catagoryHandler(CONSTANT.PROCEDDING)}
          >
            {CONSTANT.PROCEDDING}
          </MainCatagoryButton>
          <MainCatagoryButton onClick={() => catagoryHandler(CONSTANT.END)}>
            {CONSTANT.END}
          </MainCatagoryButton>
          <MainCatagoryButton onClick={() => catagoryHandler(CONSTANT.ALL)}>
            {CONSTANT.ALL}
          </MainCatagoryButton>
        </MainCatagoryBox>
        <Suspense fallback={<div>Loading...</div>}>
          {Object.keys(ongoingPosting)
            .filter((key: string) => {
              const { isEnd } = ongoingPosting[+key];
              if (catagory === CONSTANT.PROCEDDING) {
                return isEnd === false;
              }
              if (catagory === CONSTANT.END) {
                return isEnd === true;
              }
              if (catagory === CONSTANT.ALL) {
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
