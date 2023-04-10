import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";

import {
  DetailButtonBox,
  DetailContentBox,
  DetaileSiteParagraph,
  DetailFooterBox,
  DetailFooterButton,
  DetailPlaceBox,
  DetailPlaceParagraph,
  DetailProviderBox,
  DetailProviderParagraph,
  DetailSection,
  DetailSiteBox,
  DetailStateBox,
  DetailStateParagraph,
  DetailSupportBox,
  DetailTopBox,
} from "./Detail.styled";
import { Layout } from "@/styles/style";

export default function Detail() {
  const location = useLocation();
  const { id, place, provider, site, startDate, endDate, support, state } =
    location.state;

  return (
    <Layout>
      <Navbar />
      <DetailSection>
        <DetailTopBox>
          <DetailSiteBox>
            <DetaileSiteParagraph>&#91;{site}&#93;</DetaileSiteParagraph>
          </DetailSiteBox>
          <DetailProviderBox>
            <DetailProviderParagraph>{provider}</DetailProviderParagraph>
          </DetailProviderBox>
          <DetailStateBox>
            <DetailStateParagraph>{state}</DetailStateParagraph>
          </DetailStateBox>
        </DetailTopBox>
        <DetailPlaceBox>
          <DetailPlaceParagraph>{place}</DetailPlaceParagraph>
        </DetailPlaceBox>
        <DetailContentBox>
          <div>
            <p>리뷰 시작기간: {startDate}</p>
            <p>리뷰 마감기간: {endDate}</p>
          </div>
          <div>
            <p>리뷰 마감까지 10일 남았습니다.😊</p>
          </div>
        </DetailContentBox>
        <DetailSupportBox>
          <div>
            <p>제공내역 : {support}</p>
          </div>
        </DetailSupportBox>
        <DetailFooterBox>
          <DetailButtonBox>
            <DetailFooterButton>컨텍 완료</DetailFooterButton>
          </DetailButtonBox>
          <DetailButtonBox>
            <DetailFooterButton>방문 완료</DetailFooterButton>
          </DetailButtonBox>
          <DetailButtonBox>
            <DetailFooterButton>리뷰쓰기 완료</DetailFooterButton>
          </DetailButtonBox>
        </DetailFooterBox>
      </DetailSection>
    </Layout>
  );
}
