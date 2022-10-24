import './style.css';
import React from 'react'
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='screen'>
        <Link to="/game">
          <div className='start-game-button'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Test Your Typing Speed")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>
        </Link>
      </div>
    </div>

  )
}
