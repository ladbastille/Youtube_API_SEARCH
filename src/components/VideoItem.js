const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='video-item'>
            <img className='video-image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='video-content'>
                <div className='video-header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;