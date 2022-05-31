import video from "../data/video.js";
import React from "react";
import Header from "./Header";
import Comments from "./Comments";
function App() {
  console.log("He re's your data:", video);
  
  return (
    <div className="App">
      <iframe
        src={video.embedUrl}
        frameBorder="0"
        title="Thinking in React"
      />
      <Header title={video.title} views={video.views} date={video.createdAt} likes={video.upvotes} dislikes={video.downvotes} />
      <button>Hide comments</button>
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
