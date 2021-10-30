import {Component} from "react";
import "./Description.scss"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"
import ru from "javascript-time-ago/locale/ru.json"
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

export default class Description extends Component {
    render() {
        return (
            <div className="container">
              <h1 className="title">{this.props.currentVideo.title}</h1>
              <div className="insights">
                <div className="video-info">
                    <span className="video-info__channel">{`By ${this.props.currentVideo.channel}`}</span>
                    <span className="video-info__date">{<ReactTimeAgo date={this.props.currentVideo.timestamp} locale={"en-US"}/>}</span>
                    <span className="video-info__date">{}</span>
                </div>
                <div className="interactions">
                    <span className="interactions__views">
                        <div className="interactions__icon"></div>
                        {this.props.currentVideo.views}
                    </span>
                    <span className="interactions__likes">
                        <div className="interactions__icon--likes"></div>
                        {this.props.currentVideo.likes}
                    </span>
                </div>
              </div>
              <p className="description">{this.props.currentVideo.description}</p>
            </div>
          );
    }
}