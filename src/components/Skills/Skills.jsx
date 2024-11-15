import React from 'react';
import './Skills.css';
import C from './img/c.svg';
import Cpp from './img/cplusplus.svg';
import css from './img/css.svg';
import html from './img/html.svg';
import js from './img/javascript.svg';
import react from './img/react.svg';

const Skills = () => {
    return (
        <div className='slider main'>
            <div className='slide-track'>
                <div className="slide">
                    <img src={C}/>
                    <h4>C</h4>
                </div>
                <div className="slide">
                    <img src={Cpp}/>
                    <h4>C++</h4>
                </div>
                <div className="slide">
                    <img src={css}/>
                    <h4>CSS</h4>
                </div>
                <div className="slide">
                    <img src={html}/>
                    <h4>HTML</h4>
                </div>
                <div className="slide">
                    <img src={js}/>
                    <h4>JavaScript</h4>
                </div>
                <div className="slide">
                    <img src={react}/>
                    <h4>React</h4>
                </div>

                {/* Repeat */}
                <div className="slide">
                    <img src={C}/>
                    <h4>C</h4>
                </div>
                <div className="slide">
                    <img src={Cpp}/>
                    <h4>C++</h4>
                </div>
                <div className="slide">
                    <img src={css}/>
                    <h4>CSS</h4>
                </div>
                <div className="slide">
                    <img src={html}/>
                    <h4>HTML</h4>
                </div>
                <div className="slide">
                    <img src={js}/>
                    <h4>JavaScript</h4>
                </div>
                <div className="slide">
                    <img src={react}/>
                    <h4>React</h4>
                </div>
            </div>
        </div>
    );
};

export default Skills;
