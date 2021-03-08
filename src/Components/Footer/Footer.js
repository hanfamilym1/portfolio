import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    icons: {
        color: '#f4a261',
        padding: '10px'
    },
    footer: {
        position: 'relative',
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
})
const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <a href='https://www.linkedin.com/in/michaelhan2/' target='_blank' rel="noopener noreferrer" >
                <LinkedInIcon fontSize="large" className={classes.icons}/>
            </a>
            <a href='https://github.com/hanfamilym1' target='_blank' rel="noopener noreferrer" >
                <GitHubIcon fontSize="large"  className={classes.icons}/>
            </a>
        </div>
    )
}

export default Footer
