import React from 'react';
import './App.css';
import Cloud from './images/cloud.png'
import useWebAnimations from "@wellyshen/use-web-animations";
import earth from './images/bg_earth.jpg'
import palm1 from './images/palm1.png'
import chase1 from './images/chase1.png'
import chase3 from './images/chase3.png'
import chase5 from './images/chase5.png'
import RedQueen from './images/RED-QUEEN-ALICE.gif'
import palm2 from './images/palm2.png'
import chase4 from './images/chase4.png'



function App() {

  const cloud = useWebAnimations({
    keyframes: [
      {transform: "translate(80%,0)"},
      {transform: "translate(-100%,0)"}, // Move by 500px
    ],
    timing: {
      duration: 4000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });

  const lay1 = useWebAnimations({
    keyframes: [
      {transform: "translate(0,0)"},
      {transform: "translate(-100%,0)"}, // Move by 500px
    ],
    timing: {
      duration: 10000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const Chase1 = useWebAnimations({
    keyframes: [
      {transform: "translate(0,0)"},
      {transform: "translate(-200%,0)"}, // Move by 500px
    ],
    timing: {
      duration: 20000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  const lay3 = useWebAnimations({
    keyframes: [
      {transform: "translate(80%,0)"},
      {transform: "translate(-100%,0)"}, // Move by 500px
    ],
    timing: {
      duration: 10000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });

  return (
    <div className="main">
       <div className="sky">
        <div ref={cloud.ref}>
        <img className="imgSky" src={Cloud} alt="sky"    />
        <img className="imgSky" src={Cloud} alt="sky"  />
        <img className="imgSky" src={Cloud} alt="sky"  />
        </div>  
      </div>
      
      <div className="earth">
      <img className="imgEarth" src={earth} alt="earth" />
      </div>

      <div className="allAnimation">
        <div className="layar1" ref={lay1.ref} >
        <img src={palm1} alt="palm1" className="palm1" />
        <img src={chase1} alt="chase1" className="chase1"  />
        <img src={chase3} alt="chase3" className="chase3" ref={Chase1.ref}/>
        <img src={chase5} alt="chase5" className="chase5" />
    </div>
     <div className="layer2">
     <img src={RedQueen} alt="redQueen" className="redQueen" />
    </div>
    <div className="layer3" ref={lay3.ref}>
    <img src={chase4} alt="chase4" className="chase4" />
    <img src={palm2} alt="palm2" className="palm2" />

    </div>

    </div>

    </div>
  );
}

export default App;
