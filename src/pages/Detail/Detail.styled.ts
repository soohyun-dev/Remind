import styled from "styled-components";

interface Finish {
  isFinish: boolean;
}

interface End {
  isEnd: boolean;
}

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
  line-height: 4vh;
`;

export const DetailSiteBox = styled.p`
  width: 25%;
`;

export const DetaileSiteParagraph = styled.p`
  margin-right: 0.3em;
  font-size: 14px;
  font-weight: 500;
  color: #20c997;
`;

export const DetailProviderBox = styled.p`
  width: 55%;
`;

export const DetailProviderParagraph = styled.p`
  font-weight: 500;
`;

export const DetailStateBox = styled.p`
  width: 25%;
  text-align: center;
`;

export const DetailStateParagraph = styled.p<End>`
  font-size: 16px;
  padding: 0.2em 0.6em;
  background-color: ${(props) => (props.isEnd ? "#adb5bd" : "#3f76ff")};
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
`;

export const DetailPlaceBox = styled.div`
  min-height: 4vh;
`;
export const DetailContentBox = styled.div`
  min-height: 20vh;
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

export const DetailFooterButton = styled.button<Finish>`
  text-align: center;
  margin: 1em 0;
  padding: 0.8em 0;
  width: 100%;
  border: none;
  border-radius: 7px;
  background-color: ${(props) => (props.isFinish ? "#adb5bd" : "#3f76ff")};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
