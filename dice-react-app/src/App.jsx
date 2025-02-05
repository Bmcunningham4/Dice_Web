import { useState } from 'react'
import './App.css'
import Header from './header.jsx';

import DiceRoller  from "./dice.jsx";
import dice_1 from "./assets/dice_1.svg.png";
import dice_2 from "./assets/dice_2.svg.png";
import dice_3 from "./assets/dice_3.svg.png";
import dice_4 from "./assets/dice_4.svg.png";
import dice_5 from "./assets/dice_5.svg.png";
import dice_6 from "./assets/dice_6.svg.png";

const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];


function App() {

  return (
    <div>
    <Header/>
    <div className="dice-gang">
      <button className="diff-buttons">-</button>

    <DiceRoller className="dice-image" diceImages={diceImages} />
    

      <button className="diff-buttons">+</button>
    </div>

     </div>
  );
}

export default App
