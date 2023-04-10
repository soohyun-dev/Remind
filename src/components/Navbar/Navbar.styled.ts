import styled from "styled-components";

export const NavbarSection = styled.section`
  display: flex;
  padding: 0.8em;
  background: #fff;
  align-items: center;
  line-height: 2em;
`;

export const LogoBox = styled.div`
  width: 20%;
  font-size: 18px;
  font-weight: 600;
`;

export const MenuBox = styled.div`
  width: 62%;
  display: flex;
  justify-content: center;
`;

export const MenuItemBox = styled.div`
  margin: 0.4em 0.6em 0 0.4em;
  font-weight: 500;
  font-size: 14px;
`;

export const LogoutBox = styled.div`
  width: 18%;
`;

export const LogoutButton = styled.button`
  padding: 0.4em 0.6em;
  border: none;
  border-radius: 7px;
  color: #fff;
  background: #d63384;
  font-size: 12px;
  cursor: pointer;
`;
