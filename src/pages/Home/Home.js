import "./Home.scss";
import { PostList } from "../../components/PostList";

export const Home = () => {
  const list = [ 
    {author: "Alex", value: "Title1"},
    {author: "Vasil", value: "Title2"},
    {author: "Masha", value: "Title3"},
  ];

  
  return (
    <div className="Home">
      <PostList  list={list} />
    </div>
  );
};
