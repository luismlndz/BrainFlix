import React from "react"
import "./Comments.scss"

class Comments extends React.Component {

  render() {
    return (
      <div className="comments">
        <div className="comments__container">
            <div className="comments__avatar"></div>
            <div className="comments__text">
                <div className="comments__header">
                    <p className="comments__name">{this.props.name}</p>
                    <p className="comments__date">{new Date(this.props.timestamp).toLocaleDateString()}</p>
                </div>
                <p className="comments__content">{this.props.comment}</p>
            </div>
        </div>
      </div>
    );
  }
  
}

export default Comments;