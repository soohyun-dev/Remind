import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ko } from "date-fns/esm/locale";
import Navbar from "@/components/Navbar";

import {
  RegisterButton,
  RegisterCatagoryBox,
  RegisterDateBox,
  RegisterDateParagraph,
  RegisterInput,
  RegisterPlaceSelect,
  RegisterSection,
  RegisterSiteSelect,
  RegisterTitleBox,
  RegisterTitleParagraph,
  StyledDatePicker,
} from "./Register.styled";
import { fireStore } from "@/firebase";
import { selectDocId, selectUserEmail } from "@/feature/userSlice";
import CONSTANT from "@/constant/constant";
import { Layout } from "@/styles/style";

interface NewData {
  site?: string;
  provider?: string;
  place?: string;
  startDate?: string;
  endDate?: string;
  support?: string;
  state?: string;
  registerDate?: Date;
  isContact?: boolean;
  isVisited?: boolean;
  isEnd?: boolean;
}

export default function Register() {
  const user = useSelector(selectUserEmail);
  const userDocId = useSelector(selectDocId);
  const [site, setSite] = useState("");
  const [provider, setProvider] = useState("");
  const [place, setPlace] = useState("");
  const today = new Intl.DateTimeFormat("kr").format(new Date());
  const [startDate, setStartDate] = useState<string>(today);
  const [endDate, setEndDate] = useState<string>(today);
  const [support, setSupport] = useState("");
  const navigate = useNavigate();

  const registerPosting = async () => {
    const registerInfo = collection(
      fireStore,
      `users/${userDocId}/ongoingPosting`
    );
    const newData: NewData = {};
    newData.site = site;
    newData.provider = provider;
    newData.place = place;
    newData.support = support;
    newData.state = CONSTANT.PROCEDDING;
    newData.startDate = startDate;
    newData.endDate = endDate;
    newData.registerDate = new Date();
    newData.isContact = false;
    newData.isVisited = false;
    newData.isEnd = false;
    await addDoc(registerInfo, newData);

    alert("포스팅이 추가되었습니다.");
    navigate("/Main");
  };

  return (
    <Layout>
      <Navbar />
      <RegisterSection>
        <RegisterTitleBox>
          <RegisterTitleParagraph>Register</RegisterTitleParagraph>
        </RegisterTitleBox>
        <RegisterCatagoryBox>
          <RegisterSiteSelect onChange={(e) => setSite(e.target.value)}>
            <option selected value="미블">
              미블
            </option>
            <option value="리뷰노트">리뷰노트</option>
            <option value="링블">링블</option>
            <option value="체험뷰">체험뷰</option>
            <option value="리뷰플레이스">리뷰플레이스</option>
            <option value="인스타협찬">인스타협찬</option>
            <option value="기타">기타</option>
          </RegisterSiteSelect>
          <RegisterPlaceSelect
            onChange={(e) => setPlace(e.target.value)}
            value={place}
          >
            <option value="서울">서울시</option>
            <option value="경기">경기시</option>
            <option value="인천">인천시</option>
          </RegisterPlaceSelect>
        </RegisterCatagoryBox>
        <div>
          <RegisterInput
            type="text"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            placeholder="업체명"
          />
        </div>
        <div>
          <RegisterInput
            type="text"
            value={support}
            onChange={(e) => setSupport(e.target.value)}
            placeholder="제공 내역"
          />
        </div>
        <RegisterDateBox>
          <RegisterDateParagraph>리뷰등록 시작날</RegisterDateParagraph>
          <StyledDatePicker
            locale={ko}
            dateFormat="yyyy.MM.dd"
            value={startDate}
            onChange={(date: Date) => {
              setStartDate(new Intl.DateTimeFormat("kr").format(date));
            }}
          />
        </RegisterDateBox>
        <RegisterDateBox>
          <RegisterDateParagraph>리뷰등록 마감날</RegisterDateParagraph>
          <StyledDatePicker
            locale={ko}
            dateFormat="yyyy.MM.dd"
            value={endDate}
            onChange={(date: Date) => {
              setEndDate(new Intl.DateTimeFormat("kr").format(date));
            }}
          />
        </RegisterDateBox>
        <RegisterButton onClick={() => registerPosting()}>
          등록하기
        </RegisterButton>
      </RegisterSection>
    </Layout>
  );
}
