import styled from "styled-components";

export const LoginSection = styled.section`
  padding: 2em;
  background: #fff;
  padding-top: 15vh;
  min-height: 90vh;
  text-align: center;
`;

export const LoginTitleBox = styled.div`
  margin: 2em 0;
`;

export const LoginTitleParagraph = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

export const LoginInput = styled.input`
  margin: 0.7em 0;
  padding: 1em;
  width: 100%;
  border: 2px solid #d2e3fc;
  border-radius: 15px;
`;

export const LoginButtonBox = styled.div`
  margin-top: 2em;
`;

export const LoginButton = styled.button`
  margin: 1em 0;
  width: 100%;
  font-size: 16px;
  padding: 0.8em 0.6em;
  background-color: #3f76ff;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
