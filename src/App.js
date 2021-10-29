import React from 'react';
import './App.scss';
import Header from "./components/Header/Header"
import Video from './components/Video/Video';
import Description from './components/Description/Description';
import CommentSection from './components/CommentSection.js/CommentSection';
import NextVideos from './components/NextVideos/NextVideos';
import data from "./data/video-details.json"

export default class App extends React.Component {

  state = {
    currentVideo: data[0],
    data: data
  }

  render() {
    return (
      <>
      <Header/>
      <Video video={this.state.currentVideo}/>
      <main>
        <div className="left-containter">
          <Description
          title={this.state.currentVideo.title}
          channel={this.state.currentVideo.channel}
          timestamp={this.state.currentVideo.timestamp}
          views={this.state.currentVideo.views}
          likes={this.state.currentVideo.likes}
          description={this.state.currentVideo.description}
          />
          <CommentSection currentVideo={this.state.currentVideo}/>
        </div>
        <NextVideos data={this.state.data}/>
      </main>
      </>
    );
  }
}