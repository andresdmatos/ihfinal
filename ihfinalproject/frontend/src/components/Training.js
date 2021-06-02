import React from "react";
import ReactPlayer from "react-player";
import "./training.css";

const links1 = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
];

const links2 = ["https://www.youtube.com/watch?v=MT2T3-7zqpg"];

function Training(props) {
  const [readyCount, setReadyCount] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);

  const onReady = () => {
    setReadyCount(readyCount + 1);
  };

  React.useEffect(() => {
    if (readyCount === links1.length) {
      setPlaying(false);
    }
  }, [readyCount]);

  React.useEffect(() => {
    if (readyCount === links2.length) {
      setPlaying(false);
    }
  }, [readyCount]);

  return (
    <div>
      <h1>Side by Side Comparison</h1>
      <div className="sidebyside">
        <div className="amateurvid">
          <div className="vplayer">
            {links1.map((url) => (
              <ReactPlayer
                key={url}
                playing={playing}
                onReady={onReady}
                url={url}
                controls
              />
            ))}
            <h3>YOU</h3>
          </div>
        </div>
        <div className="coachvideo">
          <div className="vplayer">
            {links2.map((url) => (
              <ReactPlayer
                key={url}
                playing={playing}
                onReady={onReady}
                url={url}
                controls
              />
            ))}
            <h3>PRO</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;
