import { useLocation } from "react-router-dom";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
import { DateDiff } from "@/utils/DateDiff";
import { fireStore } from "@/firebase";
import { selectDocId } from "@/feature/userSlice";
import { CONSTANT } from "@/constant/constant";

export default function Detail() {
  const location = useLocation();
  const {
    id,
    place,
    provider,
    site,
    startDate,
    endDate,
    support,
    isEnd,
    isContact,
    isVisited,
    isUpload,
  } = location.state;

  const [isContactInfo, setIsContactInfo] = useState(isContact);
  const [isVisitedInfo, setIsVisitedInfo] = useState(isVisited);
  const [isUploadInfo, setIsUploadInfo] = useState(isUpload);
  const [isEndInfo, setIsEndInfo] = useState(isEnd);

  const docId = useSelector(selectDocId);
  const postingInfo = doc(fireStore, `users/${docId}/ongoingPosting`, id);
  const dDay = DateDiff(
    new Intl.DateTimeFormat("kr").format(new Date()),
    endDate
  );

  const endHandler = async () => {
    const newIsEnd = { isEnd: !isEndInfo };
    await updateDoc(postingInfo, newIsEnd);
  };

  const contactHandler = async () => {
    if (
      window.confirm(
        isContact
          ? "업체와 일정조율을 취소하셨나요?"
          : "업체와 일정조율을 완료하셨나요?"
      )
    ) {
      const newContact = { isContact: !isContactInfo };
      await updateDoc(postingInfo, newContact);
      setIsContactInfo(!isContactInfo);
      endHandler();
    }
  };

  const visitHandler = async () => {
    if (
      window.confirm(
        isVisited ? "업체와의 방문을 취소하셨나요?" : "업체에 방문하셨나요?"
      )
    ) {
      const newVisit = { isVisited: !isVisitedInfo };
      await updateDoc(postingInfo, newVisit);
      setIsVisitedInfo(!isVisitedInfo);
      endHandler();
    }
  };

  const upLoadHandler = async () => {
    if (
      window.confirm(
        isEnd ? "리뷰등록을 취소하셨나요?" : "리뷰등록을 완료하셨나요?"
      )
    ) {
      const newUpload = { isUpload: !isUploadInfo };
      await updateDoc(postingInfo, newUpload);
      setIsUploadInfo(!isUploadInfo);
      endHandler();
    }
  };

  useEffect(() => {
    if (isContactInfo && isVisitedInfo && isUploadInfo) {
      setIsEndInfo(true);
    } else {
      setIsEndInfo(false);
    }
  }, [isContactInfo, isVisitedInfo, isUploadInfo]);

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
            <DetailStateParagraph isEnd={isEndInfo}>
              {isEndInfo ? CONSTANT.END : CONSTANT.PROCEDDING}
            </DetailStateParagraph>
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
            <p>리뷰 마감까지 {dDay}일 남았습니다.😊</p>
          </div>
        </DetailContentBox>
        <DetailSupportBox>
          <div>
            <p>제공내역 : {support}</p>
          </div>
        </DetailSupportBox>
        <DetailFooterBox>
          <DetailButtonBox>
            {isContactInfo ? (
              <DetailFooterButton isFinish onClick={() => contactHandler()}>
                컨텍 취소
              </DetailFooterButton>
            ) : (
              <DetailFooterButton
                isFinish={false}
                onClick={() => contactHandler()}
              >
                컨텍 완료
              </DetailFooterButton>
            )}
          </DetailButtonBox>
          <DetailButtonBox>
            {isVisitedInfo ? (
              <DetailFooterButton isFinish onClick={() => visitHandler()}>
                방문 취소
              </DetailFooterButton>
            ) : (
              <DetailFooterButton
                isFinish={false}
                onClick={() => visitHandler()}
              >
                방문 완료
              </DetailFooterButton>
            )}
          </DetailButtonBox>
          <DetailButtonBox>
            {isUploadInfo ? (
              <DetailFooterButton isFinish onClick={() => upLoadHandler()}>
                리뷰 등록 취소
              </DetailFooterButton>
            ) : (
              <DetailFooterButton
                isFinish={false}
                onClick={() => upLoadHandler()}
              >
                리뷰 등록 완료
              </DetailFooterButton>
            )}
          </DetailButtonBox>
        </DetailFooterBox>
      </DetailSection>
    </Layout>
  );
}
