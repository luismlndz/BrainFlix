import {Component} from "react"
import "./VideoCard.scss"

export default class VideoCard extends Component {

    handleClick = (index) => {
        this.props.clickHandler(index)
    }

    render() {
        return (
        <div onClick={() => {this.handleClick(this.props.id)}} className="video-card">
            <div>
                <img src={this.props.video.image} className="video-card__thumbnail" alt="thumbnail"></img>
            </div>
            <div className="video-card__text">
                <p className="video-card__title">{this.props.video.title}</p>
                <p className="video-card__channel">{this.props.video.channel}</p>
            </div>
        </div>
        );
    }
}