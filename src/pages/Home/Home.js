import { Component } from 'react';
import '../../BrainFlix.scss';
import Video from '../../components/Video/Video';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import NextVideos from '../../components/NextVideos/NextVideos';
import axios from 'axios';
const apiURL = 'https://project-2-api.herokuapp.com'
const apiKEY = '?api_key=67e1a87f-213f-4fba-b06e-69697646e796'

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
    axios.get(`${apiURL}/videos/${apiKEY}`)
    .then((response) => {
      this.setState({
        currentVideo: response.data.find((video) => {
          return video.id === this.props.match.params.id
        })
      }, () => {
        axios.get(`${apiURL}/videos/${this.state.currentVideo.id}/${apiKEY}`)
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
      : <p className="loading">Loading...</p>}
      </>
    );
  }
}