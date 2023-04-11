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
  state: string;
  isContact: boolean;
  isVisited: boolean;
  isEnd: boolean;
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
  state,
  isContact,
  isVisited,
  isEnd,
}: Posting) {
  const dDay = DateDiff(startDate, endDate);

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
            <p>{state}</p>
          </PreviewReviewState>
          <PreviewReviewState>
            <p>리뷰작성전</p>
          </PreviewReviewState>
          <PreviewReviewState>
            <p>리뷰완료</p>
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
              state,
              isContact,
              isVisited,
              isEnd,
            }}
          >
            <DetailButton>상세보기</DetailButton>
          </Link>
        </PreviewButtonBox>
      </PreviewFooterBox>
    </PreviewBox>
  );
}
