export const Todo = (props) => {
  const { title, userid } = props;
  return <p>{`${title}, ユーザーID${userid}`}</p>
}