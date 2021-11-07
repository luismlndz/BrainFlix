import { Link } from "react-router-dom";
import "./NextVideos.scss"
import VideoCard from "../VideoCard/VideoCard";

export default function NextVideos(props) {

     return (
        <div className="videos-container">
            <p className="header-text">NEXT VIDEOS</p>
<<<<<<< HEAD
            {this.props.data.filter((video) => (video !== this.props.currentVideo))
            .map((video, index) => (
                <VideoCard
                key={index}
                clickHandler={this.props.clickHandler}
                id={this.props.data.indexOf(video)}
                video={video}/>
            ))}
=======
            {props.videos.map((video) => {
                return (
                    <Link key={video.id} to={`/video/${video.id}`} className="link">
                        <VideoCard currentVideo={video}/>
                    </Link>
                )
            })}
>>>>>>> sprint-2
        </div>
    );
}