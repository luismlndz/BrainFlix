import './Upload.scss';
import { Link } from 'react-router-dom';

export default function Upload(){

  return (
    <form className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__fields">
          <div className="upload__image-container">
              <p className="upload__heading">VIDEO THUMBNAIL</p>
              <div className="upload__image"></div>
          </div>
          <div className="upload__inputs">
              <p className="upload__heading">TITLE YOUR VIDEO</p>
              <input className="upload__input" placeholder="Add a title to your video"/>
              <p className="upload__heading">ADD A VIDEO DESCRIPTION</p>
              <textarea className="upload__input upload__input-description" placeholder="Add a description to your video"/>
          </div>
        </div>
        <div className="upload__options">
          <Link to="/" className="link"><button className="upload__button">
              <span className="upload__button-icon"></span>PUBLISH</button></Link>
          <Link to="/" className="upload__cancel">CANCEL</Link>
        </div>
    </form>
  );
}