import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Layout } from "../Home/Home.styled";
import { RegisterSection, RegisterTitle } from "./Register.styled";
import { fireStore } from "@/firebase";

interface NewData {
  site?: string;
  provider?: string;
  place?: string;
  submitDate?: string;
  reviewDate?: string;
  support?: string;
}

export default function Register() {
  const [site, setSite] = useState("");
  const [provider, setProvider] = useState("");
  const [place, setPlace] = useState("");
  const [submitDate, setSubmitDate] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [support, setSupport] = useState("");
  const navigate = useNavigate();

  const registerPosting = async () => {
    const registerInfo = collection(fireStore, `users/`);
    const newData: NewData = {};
    newData.site = site;
    newData.provider = provider;
    newData.place = place;
    newData.submitDate = submitDate;
    newData.reviewDate = reviewDate;
    newData.support = support;

    await addDoc(registerInfo, newData);

    alert("질문이 추가되었습니다.");
    navigate("/Main");
  };

  return (
    <Layout>
      <Navbar />
      <RegisterSection>
        <RegisterTitle>
          <p>Register</p>
        </RegisterTitle>
        <div>
          <p>체험단 사이트</p>
          <select value={site}>
            <option>미블</option>
            <option>리뷰노트</option>
            <option>링블</option>
            <option>체험뷰</option>
            <option>기타</option>
          </select>
        </div>
        <div>
          <input value={provider} placeholder="업체명" />
        </div>
        <div>
          <select value={place}>
            <option>서울</option>
            <option>경기</option>
            <option>인천</option>
          </select>
        </div>
        <div>
          <input value={submitDate} placeholder="신청 날짜" />
        </div>
        <div>
          <input value={reviewDate} placeholder="리뷰 기간" />
        </div>
        <div>
          <input value={support} placeholder="제공 내역" />
        </div>
        <div />
        <button onClick={() => registerPosting()}>등록하기</button>
      </RegisterSection>
    </Layout>
  );
}
