import "./PostList.scss";
import {PostItem} from '../PostItem'


export function PostList({list}) {
  console.log(list)
  return (
    <div className="PostList">
      <h3>List</h3>
      {list.length ? list.map((value) => <PostItem value={value} />) : null}
    </div>
  )
}
