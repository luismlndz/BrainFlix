import "./Description.scss"
import ReactTimeAgo from "react-time-ago";

export default function Description(props) {

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
                        <div className="interactions__icon--likes"></div>
                        {props.videoDetails.likes}
                    </span>
                </div>
            </div>
            <p className="description">{props.videoDetails.description}</p>
        </div>
    );
}