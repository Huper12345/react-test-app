import "./Home.scss";
import { PostList } from "../../components/PostList";

export const Home = () => {
  const list = ['Title', 'Title2', 'Title3'];
  
  return (
    <div className="Home">
      <PostList list={list} />
    </div>
  );
};
