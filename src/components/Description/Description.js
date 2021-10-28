import "./Description.scss"
import data from "../../data/video-details.json"

function Description() {
  return (
    <div className="container">
      <h1 className="title">{data[0].title}</h1>
      <div className="insights">
        <div className="video-info">
            <span className="video-info__channel">{`By ${data[0].channel}`}</span>
            <span className="video-info__date">{new Date(data[0].timestamp).toLocaleDateString()}</span>
        </div>
        <div className="interactions">
            <span className="interactions__views">
                <div className="interactions__icon"></div>
                {data[0].views}
            </span>
            <span className="interactions__likes">
                <div className="interactions__icon--likes"></div>
                {data[0].likes}
            </span>
        </div>
      </div>
      <p className="description">{data[0].description}</p>
    </div>
  );
}

export default Description;