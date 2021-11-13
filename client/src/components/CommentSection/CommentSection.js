import "./CommentSection.scss"
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import axios from "axios";
import { useEffect, useState } from "react";
const apiURL = 'http://localhost:8080'

export default function CommentSection(props) {
    const [comments, setComments] = useState([])

    useEffect(()=> {
        axios.get(`${apiURL}/videos/${props.videoDetails.id}/`)
        .then((response) => {
            setComments(response.data.comments)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [props.videoDetails])

    const handleAdd = (comment) => {
        axios.post(`${apiURL}/videos/${props.videoDetails.id}/comments/`, comment)
        .then((response) => {
            setComments(comments.concat(response.data))
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleDelete = (id) => {
        axios.delete(`${apiURL}/videos/${props.videoDetails.id}/comments/${id}`)
        .then((res) => {
            setComments(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <p className="comment-count">{comments.length === 1 ? `${comments.length} Comment` : `${comments.length} Comments`}</p>
            <CommentForm addComment={handleAdd}/>
            {comments.sort((x, y) => {
                return y.timestamp - x.timestamp
            }).map((comment, index) => (
                <Comment deleteComment={handleDelete} key={index} comment={comment}/>
            ))}
        </>
    );
}