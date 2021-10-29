import React from "react";
import "./Description.scss"

export default class Description extends React.Component {
    render() {
        return (
            <div className="container">
              <h1 className="title">{this.props.title}</h1>
              <div className="insights">
                <div className="video-info">
                    <span className="video-info__channel">{`By ${this.props.channel}`}</span>
                    <span className="video-info__date">{new Date(this.props.timestamp).toLocaleDateString()}</span>
                </div>
                <div className="interactions">
                    <span className="interactions__views">
                        <div className="interactions__icon"></div>
                        {this.props.views}
                    </span>
                    <span className="interactions__likes">
                        <div className="interactions__icon--likes"></div>
                        {this.props.likes}
                    </span>
                </div>
              </div>
              <p className="description">{this.props.description}</p>
            </div>
          );
    }
}