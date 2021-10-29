import React from "react"
import "./CommentForm.scss"

export default class CommentForm extends React.Component {

    handleClick = (event) => {
        event.preventDefault()
        console.log(event.target.input.value)
        // Rest will be implemented in later sprint
    }

    render() {
        return (
        <div className="form-container">
            <div className="avatar"></div>
            <form onSubmit={this.handleClick} className="form">
                <div className="form__subcontainer">
                    <p className="form__title">JOIN THE CONVERSATION</p>
                    <textarea className="form__input" name="input" placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="form__button">
                    <span className="form__button-icon"></span>
                    COMMENT</button>
            </form>
        </div>
        );
    }
}