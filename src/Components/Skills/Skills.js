import React, { Component } from 'react'
import './Skills.css'
import redux from './Redux.png'
import react from '../Skills/React.png'
import postgres from './Postgres.png'
import node from './Nodejs.png'
import javascript from './JS.png'
import html from './HTML.png'
import css from './css.png'
import adobe from './Adobe.png'

class Skills extends Component {
    render() {

        return (
            <div className='Skills'>
                <div className='animated zoomIn skills-whole' >
                    <div className='skills-img'>
                        <img src={react} className='skills-imgs'alt="react" />
                        <h3 className='title-center'>React</h3>
                        
                    </div>
                    <div className='skills-img'>
                        <img src={redux} className='skills-imgs' alt="redux" />
                        <h3 className='title-center'>Redux</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={postgres}className='skills-imgs' alt="postgres" />
                        <h3 className='title-center'>PostgreSQL</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={node} className='skills-imgs' alt="node" />
                        <h3 className='title-center'>Node.JS</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={javascript} className='skills-imgs' alt="javascript" />
                        <h3 className='title-center'>Javascript</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={html} className='skills-imgs' alt="html" />
                        <h3 className='title-center'>HTML5</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={css} className='skills-imgs' alt="css" />
                        <h3 className='title-center'>CSS</h3>
                    </div>
                    <div className='skills-img'>
                        <img src={adobe} className='skills-imgs' alt="adobe" />
                        <h3 className='title-center'>Adobe</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills