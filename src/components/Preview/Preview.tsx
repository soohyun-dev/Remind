import { PreviewBox } from "./Preview.styled";

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
}: Posting) {
  return (
    <PreviewBox>
      <div>
        <p>장소: {place}</p>
        <p>리뷰기간: {reviewDate}</p>
        <p>업체: {site}</p>
        <p>제공내역: {support}</p>
      </div>
    </PreviewBox>
  );
}
