import React, { Component } from 'react'
import './Projects.css'
import {Link} from 'react-router-dom'
// import devbuddy from './DevBuddy.mp4'
// import stacky from './stacky.mp4'
import devbuddy from './devbuddy.png'
import stacky from './stacky.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';




  
class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <div className="paper-container">
                    <Card className="card-root">
                        <CardActionArea className="card-area">
                            <Link className='b' to="/project/typing">
                                <div className="card-media-typing">
                                    <h3>Work In Progress</h3>
                                </div>
                                <CardContent className="card-content">
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Typing Test | Current Personal Project
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Currently building a Typing Test game.  The concept being where you can verse your friends in a friendly duel of who has the best words per minute.  
                                    </Typography>
                                    <Divider className="divider"/>
                                    <Typography variant="body2" component="p">
                                        Front End: React <br/>
                                        Currently working on the basic mechanics of the typing test game.
                                    </Typography>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                        <CardActions>
                            <Button className="project-btn" variant="contained">
                                 <Link  className="project-link" to="/project/typing">Example</Link>
                            </Button>
                            <Button className="project-btn" variant="contained">
                                <a  className="project-link" href="https://github.com/hanfamilym1/typing-test" target='_blank' rel="noopener noreferrer">Github</a>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className="card-root">
                        <CardActionArea className="card-area">
                            <a className='b' href='https://www.devbuddy.net' target='_blank' rel="noopener noreferrer">
                                <CardMedia
                                className="card-media"
                                image={devbuddy}
                                title="DevBuddy"
                                />
                                <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                    DevBuddy | Personal Project
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Allows communication with one student to another and see when different activities would be held.  Additionally, I added some features that allowed the administrators to carefully analyze who to help best and what they can do better to help the students.
                                </Typography>
                                <Divider className="divider"/>
                                <Typography variant="body2"component="p">
                                    Front End: React | Redux | Auth0 <br />
                                    Chat Component: Socket.io <br />
                                    Data Analysis: Chart.js <br />
                                    Backend: Node | Express | Postgres
                                </Typography>
                                </CardContent>
                            </a>
                        </CardActionArea>
                        <CardActions>
                            <Button className="project-btn" variant="contained">
                                <a className="project-link" href='https://www.devbuddy.net' target='_blank' rel="noopener noreferrer" >Website</a>
                            </Button>
                            <Button className="project-btn" variant="contained">
                                <a className="project-link" href="https://github.com/hanfamilym1/personalproject" target='_blank' rel="noopener noreferrer">Github</a>
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className="card-root">
                        <CardActionArea className="card-area">
                            <a className='b' href='https://stackygame.com' target='_blank' rel="noopener noreferrer">
                                <CardMedia
                                className="card-media"
                                image={stacky} 
                                title="Stacky Game"
                                />
                                <CardContent className="card-content">
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Stacky | Group Project
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                            Created a game that allows numbers that equal each other to add to one another.
                                            Game functionality consisted of logic within Vanilla Javascript.
                                    </Typography>
                                    <Divider className="divider"/> 
                                    <Typography variant="body2" component="p">
                                            Front End: React <br />
                                            Backend: Node | Express | Postgres
                                    </Typography>
                                </CardContent>
                            </a>
                        </CardActionArea>
                        <CardActions>
                            <Button className="project-btn" variant="contained">
                            <a className="project-link" href="https://stackygame.com" target='_blank' rel="noopener noreferrer">Website</a>
                            </Button>
                            <Button className="project-btn" variant="contained">
                            <a className="project-link" href="https://github.com/Group-Project-2048/tetris-2048" target='_blank' rel="noopener noreferrer">Github</a>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Projects