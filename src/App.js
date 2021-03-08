import React, { Component } from 'react';
import './App.css';

import route from './route'
import { HashRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import { Parallax, Background } from 'react-parallax'
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
        <div>
          <div className='portfolio'>
            <div className='mobile'>
              <Button onClick={this.toggleDrawer} style={{ backgroundColor: '#f4a261', position: 'absolute', color: 'white', right: '55px', top: '15px', zIndex: '1' }}>Menu</Button>
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
            </div>
            <div className="desktop">
              <Nav/>
            </div>
              {route}
          </div>
        </div>
      </HashRouter>
    )
  }
}





export default App;
