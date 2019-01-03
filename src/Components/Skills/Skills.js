import React, { Component } from 'react'
import './Skills.css'
import redux from './Redux.png'
import react from './react.png'
import postgres from './postgresql.png'
import node from './node-js.png'
import javascript from './js-square.png'
import html from './html5.png'
import css from './css3.png'
import adobe from './adobe-ai-256.png'

class Skills extends Component {
    render() {

        return (
            <div class='Skills'>
                <div className='animated zoomIn skills-whole' >
                    <div className='skills-img'>
                        <img src={react} className='skills-imgs'alt="" />
                        <h3 class='title-center' style={{color: 'white'}}>React</h3>
                        
                    </div>
                    <div className='skills-img'>
                        <img src={redux} className='skills-imgs' alt="" />
                        <h3 class='title-center'  style={{color: 'white'}}>Redux</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={postgres}className='skills-imgs' alt="" />
                        <h3 class='title-center'  style={{color: 'white'}}>PostgreSQL</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={node} className='skills-imgs' alt="" />
                        <h3 class='title-center'  style={{color: 'white'}}>Node.JS</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={javascript} className='skills-imgs' alt="" />
                        <h3 class='title-center'  style={{color: 'white'}}>Javascript</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={html} className='skills-imgs' alt="" />
                        <h3 class='title-center'  style={{color: 'white'}}>HTML5</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={css} className='skills-imgs' alt="" />
                        <h3 class='title-center'  style={{color: 'white'}}>CSS</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={adobe} className='skills-imgs' alt="" />
                        <h3 class='title-center'  style={{color: 'white'}}>Adobe</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills