import Description from '../Description/Description';
import CommentSection from '../CommentSection/CommentSection';

export default function VideoDetails(props) {

    return (
        <>
            <Description {...props} videoDetails={props.videoDetails}/>
            <CommentSection videoDetails={props.videoDetails}/>
        </>
    );
}