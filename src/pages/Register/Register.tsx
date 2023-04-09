import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import { Layout } from "../Home/Home.styled";
import { RegisterSection, RegisterTitle } from "./Register.styled";
import { fireStore } from "@/firebase";
import { selectDocId, selectUserEmail } from "@/feature/userSlice";
import { PROCEDDING } from "@/constant/constant";

interface NewData {
  site?: string;
  provider?: string;
  place?: string;
  submitDate?: string;
  reviewDate?: string;
  support?: string;
  state?: string;
  registerDate?: Date;
}

export default function Register() {
  const user = useSelector(selectUserEmail);
  const userDocId = useSelector(selectDocId);
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
    const registerInfo = collection(
      fireStore,
      `users/${userDocId}/ongoingPosting`
    );
    const newData: NewData = {};
    newData.site = site;
    newData.provider = provider;
    newData.place = place;
    newData.submitDate = submitDate;
    newData.reviewDate = reviewDate;
    newData.support = support;
    newData.state = PROCEDDING;
    newData.registerDate = new Date();

    await addDoc(registerInfo, newData);

    alert("포스팅이 추가되었습니다.");
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
          <input
            type="text"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            placeholder="업체명"
          />
        </div>
        <div>
          <select value={place}>
            <option>서울</option>
            <option>경기</option>
            <option>인천</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            value={submitDate}
            onChange={(e) => setSubmitDate(e.target.value)}
            placeholder="신청 날짜"
          />
        </div>
        <div>
          <input
            type="text"
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}
            placeholder="리뷰 기간"
          />
        </div>
        <div>
          <input
            type="text"
            value={support}
            onChange={(e) => setSupport(e.target.value)}
            placeholder="제공 내역"
          />
        </div>
        <div />
        <button onClick={() => registerPosting()}>등록하기</button>
      </RegisterSection>
    </Layout>
  );
}
