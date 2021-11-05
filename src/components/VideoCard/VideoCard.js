import "./VideoCard.scss"

export default function VideoCard(props) {

    return (
        <div className="video-card">
            <div>
                <img src={props.currentVideo.image} className="video-card__thumbnail" alt="thumbnail"></img>
            </div>
            <div className="video-card__text">
                <p className="video-card__title">{props.currentVideo.title}</p>
                <p className="video-card__channel">{props.currentVideo.channel}</p>
            </div>
        </div>
    );
}