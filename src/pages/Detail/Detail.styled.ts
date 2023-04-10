import styled from "styled-components";

export const DetailSection = styled.section`
  padding: 1em;
  background-color: #fff;
  min-height: 97vh;
`;

export const DetailTopBox = styled.div`
  min-height: 7vh;
  display: flex;
  margin: 1em 0 0.5em 0;
  font-size: 22px;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #f1f3f5;
`;

export const DetailSiteBox = styled.p`
  width: 16%;
`;

export const DetaileSiteParagraph = styled.p`
  margin-right: 0.3em;
`;

export const DetailProviderBox = styled.p`
  width: 66%;
`;

export const DetailProviderParagraph = styled.p`
  font-weight: 500;
`;

export const DetailStateBox = styled.p`
  width: 18%;
`;

export const DetailStateParagraph = styled.p`
  font-size: 16px;
  padding: 0.4em 0.8em;
  background-color: #3f76ff;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
`;

export const DetailPlaceBox = styled.div`
  min-height: 4vh;
`;
export const DetailContentBox = styled.div`
  min-height: 40vh;
`;

export const DetailPlaceParagraph = styled.p`
  color: #adb5bd;
  font-size: 18px;
  font-weight: 500;
`;

export const DetailSupportBox = styled.div`
  padding: 0.4em;
  border-top: 1px solid #f1f3f5;
  min-height: 1vh;
  text-align: right;
  font-weight: 500;
`;

export const DetailFooterBox = styled.div`
  margin-top: 3em;
  min-height: 40vh;
`;

export const DetailButtonBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const DetailFooterButton = styled.button`
  margin: 1em 0;
  padding: 0.8em 0;
  width: 100%;
  border: none;
  border-radius: 7px;
  background-color: #3f76ff;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
