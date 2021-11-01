import {Component} from "react"
import "./Comment.scss"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"
import ru from "javascript-time-ago/locale/ru.json"
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export default class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <div className="comment__container">
            <div className="comment__avatar"></div>
            <div className="comment__text">
                <div className="comment__header">
                    <p className="comment__name">{this.props.comment.name}</p>
                    <p className="comment__date">{<ReactTimeAgo date={this.props.comment.timestamp} locale={"en-US"}/>}</p>
                </div>
                <p className="comment__content">{this.props.comment.comment}</p>
            </div>
        </div>
      </div>
    );
  }
}