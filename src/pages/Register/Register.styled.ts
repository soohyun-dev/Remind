import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const RegisterSection = styled.section`
  padding: 2em;
  background: #fff;
  padding-top: 10vh;
  min-height: 90vh;
  text-align: center;
`;

export const RegisterTitleBox = styled.div`
  margin: 2em 0;
`;

export const RegisterTitleParagraph = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

export const RegisterCatagoryBox = styled.div`
  display: flex;
  justify-content: start;
`;

export const RegisterSiteSelect = styled.select`
  width: 14em;
  margin: 1em 1em 1em 0;
  padding: 0.5em;
  border: 2px solid #d2e3fc;
  border-radius: 10px;
`;

export const RegisterPlaceSelect = styled.select`
  width: 14em;
  margin: 1em 0;
  padding: 0.7em;
  border: 2px solid #d2e3fc;
  border-radius: 10px;
`;

export const RegisterInput = styled.input`
  margin: 0.7em 0;
  padding: 1em;
  width: 100%;
  border: 2px solid #d2e3fc;
  border-radius: 15px;
`;

export const RegisterButton = styled.button`
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

export const RegisterDateBox = styled.div`
  margin: 2em 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const RegisterDateParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  width: 60%;
`;

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #d2e3fc;
  width: 10em;
  height: 2em;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  padding: 20px;
  color: #707070;
  top: -48px;
  left: 5px;
`;
