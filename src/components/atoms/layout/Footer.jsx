import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 株式会社test Inc.</SFooter>;
};

const SFooter = styled.footer`
  width: 100%;
  height: 50px;
  background-color: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;
