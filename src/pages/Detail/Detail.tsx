import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Layout } from "../Home/Home.styled";
import { DetailSection } from "./Detail.styled";

export default function Detail() {
  const location = useLocation();
  const {
    id,
    place,
    registerDate,
    reviewDate,
    provider,
    site,
    submitDate,
    support,
    state,
  } = location.state;

  return (
    <Layout>
      <Navbar />
      <DetailSection>
        <div>
          <p>지역: {place}</p>
        </div>
        <div>
          <p>제공업체: {provider}</p>
        </div>
        <div>
          <p>신청 사이트: {site}</p>
        </div>
        <div>
          <p>리뷰 기간: {submitDate}</p>
        </div>
        <div>
          <p>제공내역 : {support}</p>
        </div>
        <div>
          <p>상태 : {state}</p>
        </div>
        <button>컨텍 완료</button>
        <button>방문 완료</button>
        <button>리뷰쓰기 완료</button>
      </DetailSection>
    </Layout>
  );
}
