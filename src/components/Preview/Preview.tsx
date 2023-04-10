import { Link } from "react-router-dom";
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
}: Posting) {
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
          <PreviewDdayParagraph>리뷰 마감기한 D-1</PreviewDdayParagraph>
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
            }}
          >
            <DetailButton>상세보기</DetailButton>
          </Link>
        </PreviewButtonBox>
      </PreviewFooterBox>
    </PreviewBox>
  );
}
