import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: greenyellow;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
`;
