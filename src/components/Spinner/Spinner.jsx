import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import './Spinner.css';

const Spinner = () => {
  const wordSets = [
    ['Innovator', 'Implementor', 'Integrator'],
    ['Create', 'Coder', 'Craftman'],
    ['Designer', 'Developer', 'Disruptor']
  ];

  const [currentSet, setCurrentSet] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const randomSetIndex = Math.floor(Math.random() * wordSets.length);
    setCurrentSet(wordSets[randomSetIndex]);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  }, []);

  return (
    <div className={`loader-container ${!isAnimating ? 'slide-out' : ''}`}>
      <Particles
        className="particles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: 50,
            },
            color: {
              value: "#ffffff",
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: 1,
            },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.1,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
          },
        }}
      />
      <div className="words-container">
        {currentSet.map((word, index) => (
          <div 
            key={index} 
            className={`word-animation word${index + 1}`}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
