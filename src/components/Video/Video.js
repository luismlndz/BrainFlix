import "./Video.scss"
import data from "../../data/video-details.json"

function Video() {
  return (
    <div className="video-container">
      <video className="video" controls poster={data[0].image}></video>
    </div>
  );
}

export default Video;