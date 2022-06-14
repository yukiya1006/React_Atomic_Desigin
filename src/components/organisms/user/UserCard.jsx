import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <div>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>電話番号</dt>
          <dd>{user.phoneNumber}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>住所</dt>
          <dd>{user.company.adress}</dd>
        </div>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 70px;
    padding-bottom: 10px;
    overflow-wrap: break-word;
  }
`;
