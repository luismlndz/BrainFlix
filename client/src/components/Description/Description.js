import "./Description.scss"
import ReactTimeAgo from "react-time-ago";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
const apiURL = 'http://localhost:8080'

export default function Description(props) {
    const [likes, setLikes] = useState(0)

    //Allow user to only like video once per url change
    const [button, setButton] = useState(false)
    let { url } = props.match
    let prevUrl = usePrevious(url)

    useEffect(() => {
        //Reset like button on new video
        if(url !== prevUrl) {
            document.getElementById('likes').classList.remove("selected")
            setButton(false)
        }

        axios.get(`${apiURL}/videos/${props.videoDetails.id}`).then((res) => {
            setLikes(res.data.likes)
        })
    }, [props.videoDetails, url, prevUrl])

    const likeVideo = (id) => {
        if(!button) {
            axios.put(`${apiURL}/videos/${id}`).then((res) => {
                setLikes(res.data.likes)
                document.getElementById('likes').classList.add("selected")
                setButton(true)
            }
            ).catch((err) => {
                console.log(err)
            })
        }
    }

    //Custom hook to use prevProp in useEffect
    function usePrevious(value) {
        const ref = useRef()
        useEffect(() => {
            ref.current = value
        })
        return ref.current
    }

    return (
        <div className="container">
            <h1 className="title">{props.videoDetails.title}</h1>
            <div className="insights">
                <div className="video-info">
                    <span className="video-info__channel">{`By ${props.videoDetails.channel}`}</span>
                    <span className="video-info__date">{<ReactTimeAgo date={props.videoDetails.timestamp} locale={"en-US"}/>}</span>
                    <span className="video-info__date">{}</span>
                </div>
                <div className="interactions">
                    <span className="interactions__views">
                        <div className="interactions__icon"></div>
                        {props.videoDetails.views}
                    </span>
                    <span className="interactions__likes">
                        <div id='likes' onClick={() => {likeVideo(props.videoDetails.id)}} className="interactions__icon--likes"></div>
                        {likes}
                    </span>
                </div>
            </div>
            <p className="description">{props.videoDetails.description}</p>
        </div>
    );
}