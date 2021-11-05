import { Link } from "react-router-dom";
import "./NextVideos.scss"
import VideoCard from "../VideoCard/VideoCard";

export default function NextVideos(props) {

   const handleCLick = (video) => {
        props.handleUpdate(video)
    }

     return (
        <div className="videos-container">
            <p className="header-text">NEXT VIDEOS</p>
            {props.videos.map((video) => {
                return (
                    <Link 
                    onClick={() => {handleCLick(video)}} 
                    key={video.id} 
                    to={`/video/${video.id}`} 
                    className="link">
                        <VideoCard currentVideo={video}/>
                    </Link>
                )
            })}
        </div>
    );
}