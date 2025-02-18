import { useState } from "react";
import "./App.css";
import VideoBackground from "./components/VideoBackground";
import MusicPlayer from "./components/MusicPlayer";
import one from "./assets/pic1.jpg"
import two from "./assets/pictwo.jpeg"
import three from "./assets/picthree.jpg"
import four from "./assets/picfour.jpg"
import five from "./assets/picfive.jpeg"
import awuke from "./assets/awuke.jpg"
import funds from './assets/funds.jpg'
import fido from './assets/fido.jpg'
import toma from './assets/toma.jpg'
import tems from './assets/tems.jpeg'
import awukeMusic from './assets/awuke.mp3'
import temsMusic from './assets/tems.mp3'
import tomaMusic from './assets/toma.mp3'
import fidoMusic from './assets/fido.mp3'
import fundsMusic from './assets/funds.mp3'


function App() {

  const imageArray=[
    {
      image:one,
      alternative:"sky"
    },
    {
      image:two,
      alternative:"night"
    },
    {
      image:three,
      alternative:"day"
    },
    {
      image:four,
      alternative:"night"
    },
    {
      image:five,
      alternative:"flower"
    },
  ]

  const tracks =[
    {
      title: "Awuke",
      Artist:"Davido ft YG Marley",
      audio: awukeMusic,
      photo: awuke,
      bg: one
    },
    {
      title: "Funds",
      Artist:"Davido ft Odumodublvck, Chike",
      audio: fundsMusic,
      photo: funds,
      bg: two
    },
    {
      title: "Toma Toma",
      Artist:"Ruger ft Tiwa savage",
      audio: tomaMusic,
      photo: toma,
      bg: three
    },
    {
      title: "Love me Jeje",
      Artist:"Tems",
      audio: temsMusic,
      photo: tems,
      bg: four
    },
    {
      title: "Joy is Coming",
      Artist:"Fido",
      audio: fidoMusic,
      photo: fido,
      bg: five
    },
  ]
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentTrack = tracks[currentTrackIndex]
  console.log(currentTrack.bg)
  return (
    <div className="MainApp">
      <VideoBackground e={currentTrack.bg} />
      <MusicPlayer t={tracks}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex= {setCurrentTrackIndex}
      />
    </div>
  );
}

export default App;
