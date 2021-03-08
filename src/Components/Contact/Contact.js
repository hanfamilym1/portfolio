import React, {useState} from 'react'
import {makeStyles, withStyles } from '@material-ui/core/styles'
import './Contact.css'
import TextField from '@material-ui/core/TextField';
import Button from'@material-ui/core/Button';
import Footer from '../Footer/Footer'
import {useForm} from 'react-hook-form'
import Alert from '@material-ui/lab/Alert';
import emailjs from 'emailjs-com';
emailjs.init("user_fCakUmLwLpgtQIeBOV4pI");

const useStyles = makeStyles({
    form: {
        margin: '20px'
    },
    textFieldDiv: {
        display: 'flex',
        margin: '10px 0px'
    },
    textField: {
        width: '100%',
        display: 'flex'
    },
    textField2: {
        marginLeft: '10px'
    },
    message: {
        width: '100%',
    },
    mainBtn: {
        backgroundColor: '#e76f51',
        color: '#fff',
        margin: '10px 0px'
    },
    alert: {
        display: 'flex',
        justifyContent: 'center'
    },
    alertContainer: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px'
    }
})

const ContactTextFields = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#e76f51',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#e76f51',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#e76f51',
        },
        '&:hover fieldset': {
          borderColor: '#e76f51',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#e76f51',
        },
      },
    },
  })(TextField);

const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { register, handleSubmit} = useForm();
    const [sent, setSent] = useState(false)

    const handleChange = (str, event) => {
        switch(str){
            case 'name':
                setName(event.target.value)
                break;
            case 'email':  
                setEmail(event.target.value)
                break;
            case 'message':
                setMessage(event.target.value)
                break;
            default: 
                 return null
        }
    }

    const onSubmit = (data) => {
        setSent(true)
        emailjs.send('service_f2kxasm', 'template_9aenyz3', data)
        .then(function(response) {
        }, function(error) {
        });

        setTimeout(()=>setSent(false), 2000)
    };


        return (
            <>
                <div className={classes.alert}>
                    {
                       sent && <Alert severity="success" className={classes.alertContainer}>
                                    Sent
                        </Alert>
                    }
                </div>
            <div className='Contact animated rollIn'>
                <div className='contacts'>
                    <h1>Contact Me</h1>
                    <h2>Feel free to message me with regards to opportunities or any questions you may have.</h2>
                    <div>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={classes.textFieldDiv}>
                                <ContactTextFields
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    variant="outlined"
                                    className={classes.textField}
                                    inputRef={register}
                                    onChange={(e)=> handleChange('name', e)}
                                    />
                                <ContactTextFields
                                    required
                                    id="outlined-required"
                                    name="email"
                                    label="Email"
                                    placeholder="Email"
                                    value={email}
                                    variant="outlined"
                                    inputRef={register({
                                        pattern: {
                                          value: /^\S+@\S+\.\S+$/,
                                          message: "Entered value does not match email format"
                                        }
                                      })}
                                    className={`${classes.textField} ${classes.textField2}`}
                                    onChange={(e)=>handleChange('email',e)}
                                    />
                            </div>
                            <ContactTextFields
                                required
                                id="outlined-required"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                placeholder="Message"
                                value={message}
                                variant="outlined"
                                inputRef={register}
                                className={classes.message}
                                onChange={(e)=>handleChange('message',e)}
                                />
                            <Button type="submit" variant="contained" className={classes.mainBtn}>Send</Button>
                        </form>
                    </div>
                   <Footer/>
                </div>
            </div>
            </>
    )
}



export default Contact