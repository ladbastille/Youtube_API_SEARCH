import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./styles/index.css";
import Youtube from "./components/Youtube";

const apiKey = "AIzaSyBZkGHMgDAdKaYwhKCtmdwaWURXCr1e3BY";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  // useEffect(() => {
  //   Youtube.get({
  //       baseURL: "/youtube/v3/",
  //       params: {
  //         part: "snippet",
  //         maxResults: 4,
  //         key: apiKey,
  //         q:query,
  //       },
  //     })
  //     .then((res) => {
  //       setVideos(res.data.items);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [videos]);

  const handleFormSubmit = async (query) => {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 4,
        key: apiKey,
        q: query,
      },
    });
    let array = response.data.items;
    console.log(array);
    setVideos(array);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <SearchBar handleFormSubmit={handleFormSubmit} />
      <div className="row">
        <div className="out-column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="column">
          <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default App;
