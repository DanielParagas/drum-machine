import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [keyDescription, setKeyDescription] = useState("");

  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        
        <div id="drum-machine">
          <div id="display">
            { keyDescription }
          </div>

          <div id="drum-pad-container">
            
            { bankOne.map( sound => 
                  <Pad sound={sound} setKeyDescription={setKeyDescription} />
            ) }
          </div>  

        </div>

      </header>
    </div>
  );
}

function Pad({sound, setKeyDescription}) {

  const styleActiveKey = (key) => {
    document.getElementById(key).parentElement.style.backgroundColor = "#ffffff";
    document.getElementById(key).parentElement.style.color = "#000000";
    setTimeout( function() { 
      document.getElementById(key).parentElement.style.backgroundColor = "#282c34";
      document.getElementById(key).parentElement.style.color = "#ffffff";
    }, 100);
  }

  useEffect(() => {
    document.addEventListener("keydown", (evt) => {
      if(evt.key.toUpperCase() === sound.keyTrigger){
        playSound(evt.key.toUpperCase(), sound.id);
      }
    })
  }, []);

  const playSound = (key, id) => {
      const audioTag = document.getElementById(key);
      if(audioTag != null) {
        audioTag.currentTime = 0;
        audioTag.play();
        setKeyDescription(id);
        styleActiveKey(key);
      }
  }

  return(
      <div className="drum-pad" onClick={ () => playSound(sound.keyTrigger, sound.id) } id={ sound.id }> 
          { sound.keyTrigger }
          <audio src={sound.url} className="clip" id={sound.keyTrigger} />
      </div>
  );
}

export default App;
