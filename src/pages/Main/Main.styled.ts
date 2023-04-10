import styled from "styled-components";

export const MainSection = styled.section``;

export const MainIntroduceBox = styled.div`
  padding: 1em;
  text-align: center;
  min-height: 4vh;
`;

export const MainUserBox = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const MainGuideBox = styled.div`
  margin-top: 1em;
  font-size: 20px;
`;

export const MainCatagoryBox = styled.div`
  min-height: 1.5vh;
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`;

export const MainCatagoryButton = styled.button`
  margin: 0 0.3em;
  padding: 0.2em 0.8em;
  border: 1px solid #d2e3fc;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
