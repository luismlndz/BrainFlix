import React from "react"
import "./NextVideos.scss"
import VideoCard from "../VideoCard/VideoCard";

export default class NextVideos extends React.Component {

    render() {
        return (
        <div className="videos-container">
            <p className="header-text">NEXT VIDEOS</p>
            {this.props.data.map((video) => (
                <VideoCard 
                thumbnail={video.image}
                title={video.title}
                channel={video.channel}
                />
            ))}
        </div>
        );
    }
}