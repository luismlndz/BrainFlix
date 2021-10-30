import {Component} from "react";
import "./Video.scss"

export default class Video extends Component {

  render() {
    return (
      <div className="video-container">
        <video 
        className="video" 
        controls 
        poster={this.props.currentVideo.image}>
        </video>
      </div>
    );
  }
}