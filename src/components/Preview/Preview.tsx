import {
  PreviewBox,
  PreviewDateBox,
  PreviewDdayParagraph,
  PreviewFooterBox,
  PreviewPlaceBox,
  PreviewReviewState,
  PreviewReviewStateBox,
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
  reviewDate: string;
  provider: string;
  site: string;
  submitDate: string;
  support: string;
  state: string;
}

export default function Preview({
  id,
  place,
  registerDate,
  reviewDate,
  provider,
  site,
  submitDate,
  support,
  state,
}: Posting) {
  return (
    <PreviewBox>
      <PreviewReviewStateBox>
        <ProviderBox>
          <p>{provider}</p>
        </ProviderBox>
        <PreviewReviewState>
          <p>{state}</p>
        </PreviewReviewState>
        <PreviewReviewState>
          <p>리뷰작성전</p>
        </PreviewReviewState>
        <PreviewReviewState>
          <p>리뷰전</p>
        </PreviewReviewState>
      </PreviewReviewStateBox>
      <PreviewFooterBox>
        <PreviewPlaceBox>
          <p>서울시 마포구</p>
        </PreviewPlaceBox>
        <PreviewDateBox>
          <PreviewDdayParagraph>리뷰 마감기한 D-1</PreviewDdayParagraph>
        </PreviewDateBox>
      </PreviewFooterBox>
      <PreviewSiteBox>
        <p>리뷰노트</p>
      </PreviewSiteBox>
    </PreviewBox>
  );
}
