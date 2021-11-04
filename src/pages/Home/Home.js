import { Component } from 'react';
import '../../BrainFlix.scss';
import Video from '../../components/Video/Video';
import NextVideos from '../../components/NextVideos/NextVideos';
import axios from 'axios';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
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
      this.setState({currentVideo: response.data[0]}, () => {
        const filteredArray = response.data.filter((video) => {
          return video.id !== this.state.currentVideo.id
        })
        this.setState({data: filteredArray}, () => {
          this.setState({isLoading: false})
        })
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleUpdate = (video) => {
    const newVideo = this.state.videos.find((vid) => {
      return vid.id === video.id
    })
    this.setState({currentVideo: newVideo})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentVideo !== this.state.currentVideo) {
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

  showResults = () => {
    if(!this.state.isLoading) {
      return (
        <>
        <Video currentVideo={this.state.currentVideo}/>
        <main>
          <div className="left-containter">
            <VideoDetails currentVideo={this.state.currentVideo}/>
          </div>
          <NextVideos handleUpdate={this.handleUpdate} videos={this.state.videos}/>
        </main>
        </>
      )
    } else {
      return <p>Loading...</p>
    }
  }

  render() {
    return (
      <>
      {this.showResults()}
      </>
    );
  }
}