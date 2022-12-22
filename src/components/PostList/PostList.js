import "./PostList.scss";
import {PostItem} from '../PostItem'


export function PostList({ list } ) {
  return (
    <div className="PostList">
      <h3>List</h3>
      {list.length
       ? list.map((item) => {
       return<PostItem author={item.author} value={item.value} />
       }) : <div>Пусто</div>}

    </div>
  )
}
