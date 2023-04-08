import { PreviewBox } from "./Preview.styled";

export default function Preview({
  id,
  place,
  registerDate,
  reviewDate,
  provider,
  site,
  submitDate,
  support,
}) {
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
