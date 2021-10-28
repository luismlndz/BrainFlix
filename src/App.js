import './App.scss';
import Header from "./components/Header/Header"
import Video from './components/Video/Video';
import Description from './components/Description/Description';

function App() {
  return (
    <div className="App">
      <Header />
      <Video></Video>
      <main>
        <Description/>
      </main>
    </div>
  );
}

export default App;