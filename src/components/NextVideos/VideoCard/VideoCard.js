import React from "react"
import "./VideoCard.scss"

export default class VideoCard extends React.Component {

    handleClick = (index) => {
        this.props.clickHandler(index)
    }

    render() {
        return (
        <div onClick={() => {this.handleClick(this.props.id)}} className="video-card">
            <div>
                <img src={this.props.thumbnail} className="video-card__thumbnail" alt="thumbnail"></img>
            </div>
            <div className="video-card__text">
                <p className="video-card__title">{this.props.title}</p>
                <p className="video-card__channel">{this.props.channel}</p>
            </div>
        </div>
        );
    }
}