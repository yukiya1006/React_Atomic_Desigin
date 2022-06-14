import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const userInfo = useRecoilValue(userState);
  // const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <img height={160} width={160} src={image} alt="プロフィール" />
      <p>{name}</p>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  img {
    border-radius: 50%;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
  }
  p {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
`;

const SEdit = styled.span`
  text-decoration: none;
  color: purple;
  cursor: pointer;
`;
