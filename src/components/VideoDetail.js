const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Searching...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className='embed-area'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='title-and-des'>
                <h4 className='video-title'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;