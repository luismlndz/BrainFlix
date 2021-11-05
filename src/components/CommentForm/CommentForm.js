import "./CommentForm.scss"

export default function CommentForm(props) {

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!event.target.input.value) {
            const field = document.getElementById("field")
            field.style.border = "1px solid red"
            return
        }

        const newComment = {
            name: "Brainstation Man",
            comment: event.target.input.value
        }
        props.addComment(newComment)
        event.target.reset()
    }

    const removeError = () => {
        const field = document.getElementById("field")
        field.style.border = "1px solid silver"
    }

    return (
        <div className="form-container">
            <div className="avatar"></div>
            <form onSubmit={handleSubmit} className="form">
                <div className="form__subcontainer">
                    <p className="form__title">JOIN THE CONVERSATION</p>
                    <textarea onClick={removeError} id="field" className="form__input" name="input" placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="form__button">
                    <span className="form__button-icon"></span>
                    COMMENT</button>
            </form>
        </div>
    );
}