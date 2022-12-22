import "./PostItem.scss"

export const PostItem = ({value, author}) => {
  console.log(value)
  return (
    <div> <h3>author: {author}</h3> 
          <h3>{value}</h3>
    </div>
  )
}
