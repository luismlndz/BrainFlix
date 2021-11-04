import { Component } from 'react'
import axios from "axios";
import Description from '../Description/Description';
import CommentSection from '../CommentSection/CommentSection';
const apiURL = 'https://project-2-api.herokuapp.com'
const apiKEY = '?api_key=67e1a87f-213f-4fba-b06e-69697646e796'

export default class VideoDetails extends Component {

    state = {
        videoDetails: { 
            timestamp: 0,
            comments: []
        }
    }

    componentDidMount() {
        axios.get(`${apiURL}/videos/${this.props.currentVideo.id}/${apiKEY}`)
        .then((response) => {
            this.setState({videoDetails: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidUpdate(prevState) {
        if(prevState.videoDetails !== this.state.videoDetails) {
            this.componentDidMount()
        }
    }

    addComment = (comment) => {
        axios.post(`${apiURL}/videos/${this.props.currentVideo.id}/comments/${apiKEY}`, comment)
        .catch((error) => {
            console.log(error)
        })
    }

    deleteComment = (id) => {
        axios.delete(`${apiURL}/videos/${this.props.currentVideo.id}/comments/${id}/${apiKEY}`)
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
            <Description videoDetails={this.state.videoDetails}/>
            <CommentSection addComment={this.addComment} deleteComment={this.deleteComment} comments={this.state.videoDetails.comments}/>
            </>
        );
    }

}