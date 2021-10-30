import {Component} from 'react';
import './BrainFlix.scss';
import Header from "./components/Header/Header"
import Video from './components/Video/Video';
import Description from './components/Description/Description';
import CommentSection from './components/CommentSection.js/CommentSection';
import NextVideos from './components/NextVideos/NextVideos';
import data from "./data/video-details.json"

export default class BrainFlix extends Component {

  state = {
    currentVideo: data[0]
  }

  selectVideo = (index) => {
    this.setState({currentVideo: data[index]})
  }

  render() {
    return (
      <>
      <Header/>
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