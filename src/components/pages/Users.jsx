import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

const users = [...Array(100).keys()].map(() => {
  return {
    name: "test",
    image: "https://source.unsplash.com/yMSecCHsIBc",
    email: "test@gmail.com",
    phoneNumber: "000-1111-2222",
    company: {
      name: "株式会社test",
      adress: "東京都渋谷区"
    }
  };
});

export const Users = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const SUserArea = styled.div`
  padding-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
