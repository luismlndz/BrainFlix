import "./CommentSection.scss"
import CommentForm from "./CommentForm/CommentForm";
import Comment from "./Comment/Comment";

export default function CommentSection(props) {

    const handleAdd = (comment) => {
        props.addComment(comment)
    }

    const handleDelete = (id) => {
        props.deleteComment(id)
    }

    return (
        <>
            <p className="comment-count">{`${props.comments.length} Comments`}</p>
            <CommentForm addComment={handleAdd}/>
            {props.comments.sort((x, y) => {
                return y.timestamp - x.timestamp
            }).map((comment, index) => (
                <Comment deleteComment={handleDelete} key={index} comment={comment}/>
            ))}
        </>
    );
}