import React, { useEffect, useRef, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { MdPause } from "react-icons/md";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";

const MusicPlayer = ({
  t,
  isPlaying,
  setIsPlaying,
  currentTrackIndex,
  setCurrentTrackIndex,
}) => {

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null)

  const handleProgress = (e) => {
    const audio = audioRef.current;
    const progress = (e.target.value / 100) * duration;
    audio.currentTime = progress;
    setCurrentTime(progress);
  };

  const currentTrack = t[currentTrackIndex];

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % t.length);
  };
  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? t.length - 1 : prevIndex - 1
    );
  };
 

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    console.log(time)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlayAndPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  
  return (
    <div className="MusicPlayer">
      <h5>MUSIC PLAYER</h5>
      <div className="song-info">
        <h3>{currentTrack.title}</h3>
        <p>{currentTrack.Artist}</p>
      </div>
      <div className="songimage-holder">
        <img src={currentTrack.photo} alt="" />
      </div>
      <div className="timing">
        <p>{formatTime(currentTime)}</p>
        <div className="progress">
          <audio
            ref={audioRef}
            src={currentTrack.audio}
            autoPlay={isPlaying}
            onEnded={handleNextTrack}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleProgress}
          />
        </div>
        <p>{formatTime(currentTime)}</p>
      </div>

      <div className="playButtons">
        <GrChapterPrevious onClick={handlePreviousTrack} className="icon" />
        {isPlaying ? (
          <MdPause className="icon" onClick={handlePlayAndPause} />
        ) : (
          <IoMdPlay className="icon" onClick={handlePlayAndPause} />
        )}
        <GrChapterNext onClick={handleNextTrack} className="icon" />
      </div>
    </div>
  );
};

export default MusicPlayer;
