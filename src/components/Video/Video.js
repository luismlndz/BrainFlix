import React from "react";
import "./Video.scss"
import data from "../../data/video-details.json"
import Description from '../Description/Description';
import Comments from "../Comments/Comments";

class Video extends React.Component {

  render() {
    return (
      <>
      <div className="video-container">
        <video className="video" controls poster={data[0].image}></video>
      </div>
      <main>
        <Description 
        title={data[0].title}
        channel={data[0].channel}
        timestamp={data[0].timestamp}
        views={data[0].views}
        likes={data[0].likes}
        description={data[0].description}
        />
        {data[0].comments.map((comment) => (
          <Comments
          name={comment.name}
          comment={comment.comment}
          likes={comment.likes}
          timestamp={comment.timestamp}
          />
        ))}
      </main>
      </>
    );
  }
  
}

export default Video;