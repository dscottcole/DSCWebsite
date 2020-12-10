import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& .MuiTextField-root": {
//             margin: theme.spacing(0),
//             width: 300
//         }
//     },
//     button: {
//         margin: theme.spacing(1)
//     }
// }));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactMe = () => {
    // const classes = useStyles();

    const [open, setOpen] = React.useState(false);

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
    const [nameE, setNameE] = useState('')
    const [emailE, setEmailE] = useState('')
    const [subjectE, setSubjectE] = useState('')
    const [messageE, setMessageE] = useState('')

    const clearState = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let completeMessage = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }

        sendMessage(completeMessage)
        clearState()

    }

    const sendMessage = (msg) => {
        console.log(msg)
    }

    const nameField = (
        <TextField
            label="Name"
            defaultValue={name}
            variant="filled"
            name="name"
            className="input-field"
        />
    )

    const nameFieldE = (
        <TextField
            error
            label="Name"
            defaultValue={name}
            variant="filled"
            name="name"
            className="input-field"
        />
    )

    const emailField = (
        <TextField
            label="Email"
            defaultValue={email}
            variant="filled"
            name="email"
            type="email"
            className="input-field"
        />
    )

    const emailFieldE = (
        <TextField
            error
            label="Email"
            defaultValue={email}
            helperText={emailE}
            variant="filled"
            name="email"
            type="email"
            className="input-field"
        />
    )

    const subjectField = (
        <TextField
            label="Subject"
            defaultValue={subject}
            variant="filled"
            name="subject"
            type="subject"
            className="input-field"
        />
    )

    const subjectFieldE = (
        <TextField
            error
            label="Subject"
            defaultValue={subject}
            helperText={subjectE}
            variant="filled"
            name="subject"
            type="subject"
            className="input-field"
        />
    )

    const messageField = (
        <TextField
            label="Message"
            defaultValue={message}
            variant="filled"
            name="message"
            type="message"
            className="input-field"
        />
    )

    const messageFieldE = (
        <TextField
            error
            label="Message"
            defaultValue={message}
            helperText={messageE}
            variant="filled"
            name="message"
            type="message"
            className="input-field"
        />
    )

    return (
        <div className="bodyDiv-contact-form">
            <div>
                <form onSubmit={(e) => handleSubmit(e)} className="contactForm" noValidate >
                    <div>
                        {nameE === '' ? nameField : nameFieldE}
                    </div>
                    <div>
                        {emailE === '' ? emailField : emailFieldE}
                    </div>
                    <div>
                        {subjectE === '' ? subjectField : subjectFieldE}
                    </div>
                    <div>
                        {messageE === '' ? messageField : messageFieldE}
                    </div>
                    <div className="contactButton">
                        <Button type="submit" variant="contained">
                            Send Message
                    </Button>
                    </div>
                </form>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Message Sent!
                    </Alert>
                </Snackbar>
            </div>
        </div>

    );
}

export default ContactMe;