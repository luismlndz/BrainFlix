import "./Video.scss"

export default function Video(props) {

  return (
    <div className="video-container">
      <video className="video" controls poster={props.currentVideo.image}/>
    </div>
  );
}