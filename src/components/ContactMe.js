import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import emailjs from 'emailjs-com';
import { Typography } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const ContactMe = () => {
    const [open, setOpen] = React.useState(false);

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
            .then((response) => {
                console.log(response)
                setOpen(true)
                e.target.reset()
                setMessage('')
            }, (err) => {
                alert('Failed to send message. Please try again.', err);
            });
    }

    const nameField = (
        <TextField
            label="Name"
            defaultValue={name}
            variant="filled"
            name="name"
            type="text"
            className={isMobile() === false? "input-field" : "input-field-mobile-vert"}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
            startAdornment
            color='secondary'
        />
    )

    const emailField = (
        <TextField
            label="Email"
            defaultValue={email}
            variant="filled"
            name="email"
            type="text"
            className={isMobile() === false? "input-field" : "input-field-mobile-vert"}
            onChange={(e) => setEmail(e.target.value)}
            required
            color='secondary'
        />
    )

    const subjectField = (
        <TextField
            label="Subject"
            defaultValue={subject}
            variant="filled"
            name="subject"
            type="text"
            className={isMobile() === false? "input-field" : "input-field-mobile-vert"}
            onChange={(e) => setSubject(e.target.value)}
            required
            color='secondary'
        />
    )

    const messageField = (
        <TextField
            label="Message"
            defaultValue={message}
            variant="filled"
            name="message"
            type="text"
            className={isMobile() === false? "input-field" : "input-field-mobile-vert"}
            onChange={(e) => setMessage(e.target.value)}
            required
            multiline
            rows={8}
            color='secondary'
        />
    )

    const contactDesktop = (
        <div className="bodyDiv-contact-form">
            <div className="contactTitle">
                <Typography variant="h3">Contact Form</Typography>
            </div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)} className="contactForm" validate autocomplete="off">
                    <div>
                        {nameField}
                    </div>
                    <div>
                        {emailField}
                    </div>
                    <div>
                        {subjectField}
                    </div>
                    <div>
                        {messageField}
                    </div>
                    <div className="contactButton">
                        <Button type="submit" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }}>
                            Send Message
                </Button>
                    </div>
                </form>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert id="successMessage" onClose={handleClose} severity="success">
                        Message Sent!
                </Alert>
                </Snackbar>
            </div>
        </div>
    )

    const contactMobileVert = (
        <div className="bodyDiv-contact-form-mobile-vert">
            <div className="contactTitle">
                <Typography variant="h3">Contact Form</Typography>
            </div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)} className="contactForm" validate autocomplete="off">
                    <div>
                        {nameField}
                    </div>
                    <div>
                        {emailField}
                    </div>
                    <div>
                        {subjectField}
                    </div>
                    <div>
                        {messageField}
                    </div>
                    <div className="contactButton">
                        <Button type="submit" variant="contained" style={{ backgroundColor: "rgba(0,0,0,1)", color: "rgba(255,255,255,1)" }}>
                            Send Message
                </Button>
                    </div>
                </form>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert id="successMessage" onClose={handleClose} severity="success">
                        Message Sent!
                </Alert>
                </Snackbar>
            </div>
        </div>
    )

    return (
        <div>
            {isMobile() === false ? contactDesktop : contactMobileVert}
        </div>
    );
}

export default ContactMe;