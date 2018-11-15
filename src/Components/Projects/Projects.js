import React, { Component } from 'react'
import './Projects.css'
import devbuddy from './DevBuddy.mp4'
import stacky from './stacky.mp4'

class Projects extends Component {
    render() {

        return (
            <div className='projects'>
                <div className='actual '>

                    <div className='devbuddy animated slideInLeft'>
                        <div className='content'>
                            <video src={devbuddy} frameborder="0" style={{ width: '420px', height: '300px' }} controls></video>
                            <div className='content2'>
                                <h3>DevBuddy | Personal Project</h3>
                                <a className='b' href='https://www.devbuddy.net' target='_blank'  >www.devbuddy.net | Click Me</a>
                                <hr />
                                <p className='ptag'>
                                    Front End: React | Redux | Auth0 <br />
                                    Chat Component: Socket.io <br />
                                    Data Analysis: Chart.js <br />
                                    Backend: Node | Express | Postgres
                                </p>
                                <p className='ptag'>
                                    Allows communication with one student to another and see when different activities would be held.  Additionally, I added some features that allowed the administrators to carefully analyze who to help best and what they can do better to help the students.
                                </p>
                                <button className='button'><a className='a' href="https://github.com/hanfamilym1/personalproject" target='_blank'>Github</a> </button>

                            </div>
                        </div>
                    </div>
                    <div className='stacky animated slideInLeft'>
                        <div className='content'>
                            <video src={stacky} frameborder="0" controls style={{ width: '420px', height: '300px' }}></video>
                            <div className='content2'>
                                <h3>Stacky | Group Project</h3>
                                <a className='b' href="https://stackygame.com" target='_blank'>www.stackygame.com | Click Me</a>
                                <hr />
                                <p className='ptag'>
                                    Front End: React <br />
                                    Backend: Node | Express | Postgres
                                </p>
                                <p className='ptag'>
                                    Created a game that allows numbers that equal each other to add to one another.
                                    Game functionality consisted of logic within Vanilla Javascript.
                                </p>
                                <button className='button'><a className='a' href="https://github.com/Group-Project-2048/tetris-2048" target='_blank'>Github</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects