import styled from "styled-components";

interface Day {
  day: number;
}

export const PreviewBox = styled.div`
  margin: 1.5em 0.5em;
  padding: 1em;
  background-color: #fff;
  border-radius: 15px;
  border: 0 solid #f1f3f5;
  box-shadow: 0 2px 8px rgba(73, 80, 87, 0.06);
`;

export const PreviewSiteBox = styled.div`
  margin: 0.5em 0;
  font-size: 14px;
  font-weight: 500;
  color: #20c997;
`;

export const PreviewPlaceBox = styled.div`
  margin: 1em 0;
  text-align: left;
  color: #adb5bd;
  font-size: 14px;
  font-weight: 400;
`;

export const PreviewReviewStateBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const ProviderBox = styled.div`
  margin: 0.2em 0 0 0;
  font-weight: 550;
  width: 43%;
`;

export const PreviewReviewStateInnerBox = styled.div`
  display: flex;
`;

export const PreviewReviewState = styled.div`
  margin-left: 0.5em;
  padding: 0.4em 0.6em;
  border-radius: 7px;
  background-color: #e8f0fe;
  border: 1px solid #d2e3fc;
  font-size: 12px;
`;

export const PreviewFooterBox = styled.div`
  display: flex;
  margin: 2em 0 1em 0;
  padding-bottom: 0.2em;
  border-bottom: 1px solid #f1f3f5;
`;

export const PreviewDateBox = styled.div`
  width: 75%;
`;

export const PreviewDdayParagraph = styled.p<Day>`
  padding: 0.5em 0;
  color: ${(props) => (props.day <= 1 ? "red" : "black")};
  font-weight: 500;
`;

export const PreviewButtonBox = styled.div``;

export const DetailButton = styled.button`
  padding: 0.7em 1.5em;
  background-color: #3f76ff;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
