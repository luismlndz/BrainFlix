import React from "react"
import "./VideoCard.scss"

export default class VideoCard extends React.Component {

    render() {
        return (
        <div className="video-card">
            <div>
                <img src={this.props.thumbnail} className="video-card__thumbnail"></img>
            </div>
            <div className="video-card__text">
                <p className="video-card__title">{this.props.title}</p>
                <p className="video-card__channel">{this.props.channel}</p>
            </div>
        </div>
        );
    }
}