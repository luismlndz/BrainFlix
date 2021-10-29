import {Component} from "react"
import "./CommentSection.scss"
import CommentForm from "./CommentForm/CommentForm";
import Comment from "./Comment/Comment";

export default class CommentSection extends Component {

    addComment = (comment) => {
        //Will be implemented in future sprint
    }

    render() {
        return (
        <>
        <p className="comment-count">{`${this.props.currentVideo.comments.length} Comments`}</p>
        {/* Comment Form */}
        <CommentForm addComment={this.addComment}/>
        {/* Comments */}
        {this.props.currentVideo.comments.map((comment, index) => (
          <Comment
          key={index}
          name={comment.name}
          comment={comment.comment}
          likes={comment.likes}
          timestamp={comment.timestamp}
          />
        ))}
        </>
        );
    }
}