import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: whitesmoke;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 20px;
`;
