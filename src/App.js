import React, { Component } from 'react';
import './App.css';
import route from './route'
import { HashRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Parallax, Background } from 'react-parallax'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      right: false
    }
  }

  toggleDrawer = () => {
    this.setState({
      right: !this.state.right
    })
  }

  render() {
    return (
      <HashRouter>
        <div >
          <div className='portfolio'>
            <Button onClick={this.toggleDrawer} style={{ backgroundColor: '#34ACE0', position: 'absolute', color: 'white', right: '20px', top:'15px'  }}>Menu</Button>
            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
                className='nav'
              >
                <Nav />
              </div>
            </Drawer>

            {route}
          </div>
        </div>
      </HashRouter>
    )
  }
}





export default App;
