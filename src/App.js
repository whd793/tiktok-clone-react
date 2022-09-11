import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");
// import { collection, addDoc } from "firebase/firestore";
// import { doc, onSnapshot } from "firebase/firestore";
import vidOne from "./tikvid/vid1.mp4";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // db.collection("videos").onSnapshot((snapshot) =>
    //   setVideos(snapshot.docs.map((doc) => doc.data()))
    // );
  }, [videos]);
  return (
    //BEM
    <div className="app">
      <div className="app__videos">
        {/* {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )} */}

        <Video
          url={vidOne}
          channel="cuppymusic"
          description="When they ask you to come perform"
          song="test"
          likes={3577}
          messages={122}
          shares={522}
        />

        <Video
          url={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          }
          channel="cuppymusic"
          description="When they ask you to come perform"
          song="test"
          likes={3577}
          messages={122}
          shares={522}
        />

        <Video
          url={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
          channel="cuppymusic"
          description="When they ask you to come perform"
          song="test"
          likes={3577}
          messages={122}
          shares={522}
        />
        {/* <Video
          channel="cuppymusic"
          description="When they ask you to come perform"
          song="test"
          likes={3577}
          messages={122}
          shares={522}
        /> */}
      </div>
    </div>
  );
}

export default App;
