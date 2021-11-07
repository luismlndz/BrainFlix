import "./CommentSection.scss"
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import axios from "axios";
import { Component } from "react";
const apiURL = 'https://project-2-api.herokuapp.com'
const apiKEY = '?api_key=67e1a87f-213f-4fba-b06e-69697646e796'

export default class CommentSection extends Component {

    state = {
        comments: []
    }

    componentDidMount() {
        axios.get(`${apiURL}/videos/${this.props.videoDetails.id}/${apiKEY}`)
        .then((response) => {
            this.setState({comments: response.data.comments})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.videoDetails.comments !== this.props.videoDetails.comments){
            this.componentDidMount()
        }
    }

    handleAdd = (comment) => {
        axios.post(`${apiURL}/videos/${this.props.videoDetails.id}/comments/${apiKEY}`, comment)
        .then((response) => {
            this.setState({comments: this.state.comments.concat(response.data)})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    handleDelete = (id) => {
        axios.delete(`${apiURL}/videos/${this.props.videoDetails.id}/comments/${id}/${apiKEY}`)
        .then(() => {
            this.setState({comments: this.state.comments.filter((comment) => {
                return comment.id !== id
            })})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <p className="comment-count">{`${this.state.comments.length} Comments`}</p>
                <CommentForm addComment={this.handleAdd}/>
                {this.state.comments.sort((x, y) => {
                    return y.timestamp - x.timestamp
                }).map((comment, index) => (
                    <Comment deleteComment={this.handleDelete} key={index} comment={comment}/>
                ))}
            </>
        );
    }
}