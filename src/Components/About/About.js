import React, { Component } from 'react'
import './About.css'

class About extends Component {
    render() {

        return (
            <div className='about-main'>
                <div className='about animated slideInDown'>
                    <p className='about-ptag'>
                       A few years back, I went on a trip with some of my friends.  At that point, I had no idea where I was headed and what my plans were.  My friend suggested that I take a look into coding and that was the greatest suggestion anyone gave me.
                    </p>
                    <br/>
                    <p className='about-ptag'>
                       That same year, I went to DevMountain and since then, my passion for coding has been growing exponentially. 
                    </p>
                    <br/>
                    <p className='about-ptag'>
                       As I have been working on developing myself, I have learned that the most exciting thing about development is that the opportunities are endless. 
                    </p>
                    <br/>
                    <p className='about-ptag'> 
                       I am always looking for new ways to improve and continualy grow as a developer.
                    </p>
                </div>
            </div>
        )
    }
}

export default About