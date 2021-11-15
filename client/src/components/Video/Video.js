import "./Video.scss"
import { useEffect, useRef } from "react";

export default function Video(props) {
  //Ref to refresh video on url change
  const videoRef = useRef()
  const previousId = useRef(props.match.params.id)

  useEffect(() => {
    if(previousId.current !== props.match.params.id) {
      videoRef?.current.load()
    }
  }, [props.match.params.id])

  return (
    <div className='video-container'>
      <video 
      ref={videoRef} 
      className='video' 
      poster={props.videoDetails.image} 
      src={`${props.videoDetails.video}/?api_key=key`}
      controls/>
    </div>
  );
}