import { Component } from 'react';
import '../../BrainFlix.scss';
import Video from '../../components/Video/Video';
import Description from '../../components/Description/Description';
import CommentSection from '../../components/CommentSection.js/CommentSection';
import NextVideos from '../../components/NextVideos/NextVideos';
import data from '../../data/video-details.json'
const apiURL = 'https://project-2-api.herokuapp.com'
const apiKEY = '/?api_key=67e1a87f-213f-4fba-b06e-69697646e796'

export default class BrainFlix extends Component {

  state = {
    currentVideo: data[0]
  }

  componentDidMount() {

  }

  selectVideo = (index) => {
    this.setState({currentVideo: data[index]})
  }

  render() {
    return (
      <>
      <Video currentVideo={this.state.currentVideo}/>
      <main>
        <div className="left-containter">
          <Description currentVideo={this.state.currentVideo}/>
          <CommentSection currentVideo={this.state.currentVideo}/>
        </div>
        <NextVideos 
        clickHandler={this.selectVideo} 
        currentVideo={this.state.currentVideo} 
        data={data}/>
      </main>
      </>
    );
  }
}