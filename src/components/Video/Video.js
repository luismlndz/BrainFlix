import React from "react";
import "./Video.scss"

export default class Video extends React.Component {

  render() {
    return (
      <div className="video-container">
        <video 
        className="video" 
        controls 
        poster={this.props.video.image}>
        </video>
      </div>
    );
  }
}