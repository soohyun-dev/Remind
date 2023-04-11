import { Link } from "react-router-dom";
import { DateDiff } from "@/utils/DateDiff";
import {
  DetailButton,
  PreviewBox,
  PreviewButtonBox,
  PreviewDateBox,
  PreviewDdayParagraph,
  PreviewFooterBox,
  PreviewPlaceBox,
  PreviewReviewState,
  PreviewReviewStateBox,
  PreviewReviewStateInnerBox,
  PreviewSiteBox,
  ProviderBox,
} from "./Preview.styled";
import { CONSTANT } from "@/constant/constant";

interface Posting {
  id: string;
  place: string;
  registerDate: {
    seconds: number;
    nanoseconds: number;
  };
  provider: string;
  site: string;
  startDate: string;
  endDate: string;
  support: string;
  isEnd: boolean;
  isContact: boolean;
  isVisited: boolean;
  isUpload: boolean;
}

export default function Preview({
  id,
  place,
  registerDate,
  provider,
  site,
  startDate,
  endDate,
  support,
  isEnd,
  isContact,
  isVisited,
  isUpload,
}: Posting) {
  const dDay = DateDiff(
    new Intl.DateTimeFormat("kr").format(new Date()),
    endDate
  );

  return (
    <PreviewBox>
      <PreviewSiteBox>
        <p>{site}</p>
      </PreviewSiteBox>
      <PreviewPlaceBox>
        <p>{place}</p>
      </PreviewPlaceBox>
      <PreviewReviewStateBox>
        <ProviderBox>
          <p>{provider}</p>
        </ProviderBox>
        <PreviewReviewStateInnerBox>
          <PreviewReviewState>
            <p>{isEnd ? CONSTANT.END : CONSTANT.PROCEDDING}</p>
          </PreviewReviewState>
          <PreviewReviewState>
            <p>{isContact ? "컨텍완료" : "업체연결전"}</p>
          </PreviewReviewState>
          <PreviewReviewState>
            <p>{isVisited ? "방문완료" : "방문전"}</p>
          </PreviewReviewState>
        </PreviewReviewStateInnerBox>
      </PreviewReviewStateBox>
      <PreviewFooterBox>
        <PreviewDateBox>
          <PreviewDdayParagraph day={dDay}>
            리뷰 마감기한 D-{dDay}
          </PreviewDdayParagraph>
        </PreviewDateBox>
        <PreviewButtonBox>
          <Link
            to={`/Detail/${id}`}
            state={{
              id,
              place,
              registerDate,
              provider,
              site,
              startDate,
              endDate,
              support,
              isEnd,
              isContact,
              isVisited,
              isUpload,
            }}
          >
            <DetailButton>상세보기</DetailButton>
          </Link>
        </PreviewButtonBox>
      </PreviewFooterBox>
    </PreviewBox>
  );
}
