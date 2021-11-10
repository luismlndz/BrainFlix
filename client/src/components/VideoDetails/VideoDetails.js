import Description from '../Description/Description';
import CommentSection from '../CommentSection/CommentSection';

export default function VideoDetails(props) {

    return (
        <>
            <Description videoDetails={props.videoDetails}/>
            <CommentSection videoDetails={props.videoDetails}/>
        </>
    );
}