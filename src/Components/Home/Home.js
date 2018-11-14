import React, { Component } from 'react'
import './Home.css'
import img from '../../name.png'
class Home extends Component {
    render() {

        return (
            <div class='Home'>
                <div className='animated slideInDown img'>
                    <img src={img} />
                    <div className='buttons'>

                        <button className='button'><a className='a' href="https://www.linkedin.com/in/michaelhan2/" target='_blank'>Linked In</a>
                        </button>
                        <button className='button'><a className='a' href="https://github.com/hanfamilym1" target='_blank'>GitHub</a> </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home