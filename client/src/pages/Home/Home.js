import { Component } from 'react';
import '../../BrainFlix.scss';
import Video from '../../components/Video/Video';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import NextVideos from '../../components/NextVideos/NextVideos';
import axios from 'axios';
const apiURL = 'http://localhost:8080'


export default class Home extends Component {

  state = {
    currentVideo: {},
    currentVideoDetails: {
      timestamp: 0,
      comments: []
    },
    nextVideos: [],
    isLoading: true
  }
  
  // Set current video to url ID and then call api for video details & filter next videos
  componentDidMount() {
    console.log('home mount')
    axios.get(`${apiURL}/videos`)
    .then((response) => {
      this.setState({
        currentVideo: response.data.find((video) => {
          return video.id === this.props.match.params.id
        })
      }, () => {
        axios.get(`${apiURL}/videos/${this.state.currentVideo.id}`)
        .then((response) => {
            this.setState({
              currentVideoDetails: response.data,
              nextVideos: filteredVideos, 
              isLoading: false
            })
        })
        .catch((error) => {
            console.log(error)
        })
        const filteredVideos = response.data.filter((video) => {
          return video.id !== this.state.currentVideo.id
        })
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // Update only if url changes or if comments are added / deleted
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
      this.componentDidMount()
    }
  }

  render() {
    return (
      <>
      {!this.state.isLoading ? 
        <>
          <Video currentVideo={this.state.currentVideo}/>
          <main>
            <div className="left-containter">
              <VideoDetails videoDetails={this.state.currentVideoDetails}/>
            </div>
            <NextVideos videos={this.state.nextVideos}/>
          </main>
        </>
      : <div className="loading">
          <p>Loading...</p>
          <p>If this takes too long, check server</p>
        </div>}
      </>
    );
  }
}