import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 5px 25px;
  margin: 20px;
  border: none;
  border-radius: 100px;
  outline: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:active {
    cursor: pointer;
    box-shadow: none;
    transition: 0.1s;
    opacity: 0.8;
  }
`;
