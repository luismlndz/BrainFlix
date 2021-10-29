import React from "react"
import "./NextVideos.scss"
import VideoCard from "./VideoCard/VideoCard";

export default class NextVideos extends React.Component {

    render() {
        return (
        <div className="videos-container">
            <p className="header-text">NEXT VIDEOS</p>
            {this.props.data.filter((video) => (video !== this.props.currentVideo))
            .map((video, index) => (
                <VideoCard
                key={index}
                clickHandler={this.props.clickHandler}
                id={this.props.data.indexOf(video)}
                thumbnail={video.image}
                title={video.title}
                channel={video.channel}
                />
            ))}
        </div>
        );
    }
}