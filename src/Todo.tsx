export const Todo = (props) => {
  const { title, userId } = props;
  return <p>{`${title}, ユーザーID${userId}`}</p>
}