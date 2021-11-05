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
    videos: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get(`${apiURL}/videos/${apiKEY}`)
    .then((response) => {
      this.setState({
        currentVideo: response.data.find((video) => {
          return video.id === this.props.match.params.id
        })
      }, () => {
        const filteredVideos = response.data.filter((video) => {
          return video.id !== this.state.currentVideo.id
        })
        this.setState({videos: filteredVideos}, () => {
          this.setState({isLoading: false})
        })
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
      axios.get(`${apiURL}/videos/${apiKEY}`)
      .then((response) => {
        const filteredArray = response.data.filter((video) => {
          return video.id !== this.state.currentVideo.id
        })
        this.setState({videos: filteredArray})
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  handleUpdate = (video) => {
    this.setState({currentVideo: video})
  }

  render() {
    return (
      <>
      {!this.state.isLoading && 
        <>
          <Video currentVideo={this.state.currentVideo}/>
          <main>
            <div className="left-containter">
              <VideoDetails currentVideo={this.state.currentVideo}/>
            </div>
            <NextVideos handleUpdate={this.handleUpdate} videos={this.state.videos}/>
          </main>
        </>
      }
      </>
    );
  }
}