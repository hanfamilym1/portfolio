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
                <h1 className='animated zoomIn' style={{color: 'white', margin: 'auto', paddingTop: '100px', paddingBottom: '30px', display: 'flex', justifyContent: 'center', width: '200px'}}>Skills</h1>
                <div className='animated zoomIn' style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={react} style={{height:'100px'}} alt=""/>
                    <img src={redux} style={{height:'100px', marginLeft: '10px'}} alt=""/>
                    <img src={postgres} style={{height:'100px', marginLeft: '10px'}} alt=""/>
                    <img src={node} style={{height:'100px', marginLeft: '10px'}} alt=""/>
                    <img src={javascript} style={{height:'100px', marginLeft: '10px'}} alt=""/>
                    <img src={html} style={{height:'100px', marginLeft: '10px'}} alt=""/>
                    <img src={css} style={{height:'100px', marginLeft: '10px'}} alt=""/>
                    <img src={adobe} style={{height:'100px', marginLeft: '10px'}} alt=""/>
                </div>
            </div>
        )
    }
}

export default Skills