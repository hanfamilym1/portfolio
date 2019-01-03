import React, { Component } from 'react'
import './Contact.css'
import mypicture from './my-picture.jpg'
import Swal from 'sweetalert2'
import Clipboard from 'react-clipboard.js'


class Contact extends Component {

    handleClick = () => {
        Swal({
            position: 'top-end',
            title: 'Copied to the Clipboard',
            showConfirmButton: false,
            timer: 400,
        })
    }
    render() {

        return (
            <div class='Contact animated rollIn'>
                <div class='contacts'>
                    <img className='mypicture' src={mypicture} alt="" />
                    <h1 className='header'>Michael Han</h1>
                    <div>
                        <button className='button'><a className='a' href="https://www.linkedin.com/in/michaelhan2/" target='_blank'>Linked In</a>
                        </button>
                        <button className='button'><a className='a' href="https://github.com/hanfamilym1" target='_blank'>GitHub</a> </button>
                        <Clipboard style={{ fontSize: '20px' }} className='button' data-clipboard-text='michael@hanfamily.com' onClick={this.handleClick}>
                            Email</Clipboard>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact