import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Button from '@material-ui/core/Button';

class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <Link to='/' className='nav-btns'><Button className='nav-btn'>Home</Button></Link>
                <Link to='/project' className='nav-btns'><Button className='nav-btn'>Projects</Button></Link>
                <Link to='/skills' className='nav-btns' ><Button className='nav-btn'>Skills</Button></Link>
                <Link to='/about' className='nav-btns' ><Button className='nav-btn'>About</Button></Link>
                <Link to='/contact' className='nav-btns' ><Button className='nav-btn'>Contact</Button></Link>
            </div>
        )
    }
}

export default Nav