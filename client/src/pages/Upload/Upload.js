import './Upload.scss';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
const apiURL = 'http://localhost:8080'

export default function Upload() {
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { title , description } = event.target
    let validation = false

    if(validate(title) & validate(description)) {
      validation = true
    }

    //Clear any errors
    clearError(title)
    clearError(description)
    
    if(validation) {
      const newVideo = {
        title: title.value,
        description: description.value
      }

      axios.post(`${apiURL}/videos/`, newVideo)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      
      history.push(`/`)
    }
    event.target.reset()
  }

  const validate = (input) => {
    if(!input.value) {
      const inputField = document.getElementById(input.id)
      inputField.classList.add('error')
      return false
    }
    else
      return true
  }

  const clearError = (input) => {
    const inputField = document.getElementById(input.id)
    input.addEventListener('input', () => inputField.classList.remove('error'))
  }

  return (
    <form onSubmit={handleSubmit} className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__fields">
          <div className="upload__image-container">
              <p className="upload__heading">VIDEO THUMBNAIL</p>
              <div className="upload__image"></div>
          </div>
          <div className="upload__inputs">
              <p className="upload__heading">TITLE YOUR VIDEO</p>
              <input id='title' className="upload__input" placeholder="Add a title to your video"/>
              <p className="upload__heading">ADD A VIDEO DESCRIPTION</p>
              <textarea id='description' className="upload__input upload__input-description" placeholder="Add a description to your video"/>
          </div>
        </div>
        <div className="upload__options">
          <button type='submit' className="upload__button">
            <span className="upload__button-icon"></span>PUBLISH</button>
          <Link to="/" className="upload__cancel">CANCEL</Link>
        </div>
    </form>
  );
}