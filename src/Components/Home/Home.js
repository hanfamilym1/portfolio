import React, { Component } from 'react'
import './Home.css'
import mikey from '../../michael.JPG'
import Button from '@material-ui/core/Button';
import Footer from '../Footer/Footer'

class Home extends Component {
    render() {

        return (
            <>
                <div className='Home'>
                    <div className="content-info">
                        <h1>I'm Michael Han</h1>
                        <h3>FULL STACK DEVELOPER</h3>
                        <p>Currently located in Utah. I enjoy learning and working on innovative products.</p>
                    <Button variant="contained" className="home-btn" href="#/contact">Contact Me</Button>
                    </div>
                    <div className='animated slideInDown image'>
                            <div id="mikey-img">
                                <img className='home_image' alt="Michael" src={mikey} />
                            </div>
                    </div> 
                </div>
                <Footer/>
            </>
        )
    }
}

export default Home