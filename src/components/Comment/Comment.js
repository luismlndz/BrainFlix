import "./Comment.scss"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"
import ru from "javascript-time-ago/locale/ru.json"
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export default function Comment(props) {

  const handleClick = (id) => {
    props.deleteComment(id)
  }

  return (
    <div className="comment">
      <div className="comment__container">
          <div className="comment__avatar"></div>
          <div className="comment__text">
              <div className="comment__header">
                  <p className="comment__name">{props.comment.name}</p>
                  <p className="comment__date">{<ReactTimeAgo date={props.comment.timestamp} locale={"en-US"}/>}</p>
              </div>
              <p className="comment__content">{props.comment.comment}</p>
              <button onClick={() => {handleClick(props.comment.id)}} className="comment__delete">DELETE</button>
          </div>
       </div>
    </div>
  );
}