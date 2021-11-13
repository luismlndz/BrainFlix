import { useState, useEffect } from 'react';
import '../../BrainFlix.scss';
import Video from '../../components/Video/Video';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import NextVideos from '../../components/NextVideos/NextVideos';
import axios from 'axios';
const apiURL = 'http://localhost:8080'

export default function Home(props) {
  const [video, setVideo] = useState({})
  const [nextVideos, setNextVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`${apiURL}/videos`)
    .then((response) => {
      let current = response.data.find((video) => {
        return video.id === props.match.params.id
      })
      setNextVideos(response.data.filter((video) => {
        return video.id !== props.match.params.id
      }))
      return current
    })
    .then((current) => {
      axios.get(`${apiURL}/videos/${current.id}`)
      .then((response) => {
        setVideo(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
          console.log(error)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }, [props.match.params.id])

  return (
    <>
      {!isLoading ? 
        <>
          <Video {...props} videoDetails={video}/>
          <main>
            <div className="left-containter">
              <VideoDetails {...props} videoDetails={video}/>
            </div>
            <NextVideos videos={nextVideos}/>
          </main>
        </>
      : <div className="loading">
          <p>Loading...</p>
          <p>If this takes too long, check server</p>
        </div>}
    </>
  );
}