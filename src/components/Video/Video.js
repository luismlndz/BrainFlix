import "../Video/Video.scss"
import data from "../../data/videos.json"

function Video() {
  return (
    <div className="container">
      <video className="video" controls poster={data[0].image}></video>
    </div>
  );
}

export default Video;