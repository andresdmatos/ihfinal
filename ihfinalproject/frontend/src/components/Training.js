import React from "react";
import ReactPlayer from "react-player";

const links = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
];

function Training(props) {
  const [readyCount, setReadyCount] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);

  const onReady = () => {
    setReadyCount(readyCount + 1);
  };

  React.useEffect(() => {
    if (readyCount === links.length) {
      setPlaying(true);
    }
  }, [readyCount]);

  return (
    <div>
      {links.map((url) => (
        <ReactPlayer
          key={url}
          playing={playing}
          onReady={onReady}
          url={url}
          controls
        />
      ))}
    </div>
  );
}

export default Training;
