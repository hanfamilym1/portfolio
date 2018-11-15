import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class Nav extends Component {
    render() {
        return (
            <div class='Nav'>
                <Link to='/' style={{textDecoration: 'none'}}><Button color="primary" style={{ color: '#34ACE0'}}>Home</Button></Link>
                <Link to='/project' style={{textDecoration: 'none'}}><Button color="primary"  style={{marginTop: '10px', color: '#34ACE0'}}>Projects</Button></Link>
                <Link to='/skills' style={{textDecoration: 'none'}}><Button color="primary"  style={{marginTop: '10px', color: '#34ACE0'}}>Skills</Button></Link>
                <Link to='/about' style={{textDecoration: 'none'}}><Button color="primary" style={{marginTop: '10px', color: '#34ACE0'}}>About</Button></Link>
                <Link to='/contact' style={{textDecoration: 'none'}}><Button color="primary"  style={{marginTop: '10px', color: '#34ACE0'}}>Contact</Button></Link>
            </div>
        )
    }
}

export default Nav