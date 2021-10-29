import React from "react"
import "./Comment.scss"

export default class Comment extends React.Component {

  render() {
    return (
      <div className="comment">
        <div className="comment__container">
            <div className="comment__avatar"></div>
            <div className="comment__text">
                <div className="comment__header">
                    <p className="comment__name">{this.props.name}</p>
                    <p className="comment__date">{new Date(this.props.timestamp).toLocaleDateString()}</p>
                </div>
                <p className="comment__content">{this.props.comment}</p>
            </div>
        </div>
      </div>
    );
  }
}