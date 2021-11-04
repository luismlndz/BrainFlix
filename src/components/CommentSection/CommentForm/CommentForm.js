import "./CommentForm.scss"

export default function CommentForm(props) {

    const handleClick = (event) => {
        event.preventDefault()

        if(!event.target.input.value) {
            alert("Field cannot be empty!")
            return
        }

        const newComment = {
            name: "Luis Melendez",
            comment: event.target.input.value
        }
        props.addComment(newComment)
        event.target.reset()
    }

    return (
        <div className="form-container">
            <div className="avatar"></div>
            <form onSubmit={handleClick} className="form">
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