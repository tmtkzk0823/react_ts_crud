import { UserProfile } from "../types/userProfile";

import { FC } from "react";

type Props = {
  user: UserProfile
}

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0 16px",
  margin: "8px"
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
}