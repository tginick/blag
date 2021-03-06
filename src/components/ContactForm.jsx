import React, { useState } from 'react';
import axios from "axios";
import '../style/Form.css';

const ContactForm = ({ onFormSubmitted }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleNameChanged = (event) => {
        setName(event.target.value);
    }

    const handleEmailChanged = (event) => {
        setEmail(event.target.value);
    }

    const handleMessageChanged = (event) => {
        setMessage(event.target.value);
    }

    const enterContactRequest = (event) => {
        event.preventDefault();

        axios.post(process.env.REACT_APP_API_ENDPOINT + "newMessage", {
            senderName: name,
            senderEmail: email,
            messageContent: message
        })
        .then(_ => {
            onFormSubmitted(true);
        })
        .catch(response => {
            console.log(response);
            onFormSubmitted(false);
        });

    };

    return (
        <form onSubmit={enterContactRequest}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChanged} />
            </label>
            <label>
                E-Mail Address:
                <input type="text" value={email} onChange={handleEmailChanged} />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={handleMessageChanged} rows={6}/>
            </label>
            <button type="submit" className="BasicButton">Submit</button>
        </form>
    );
}

export default ContactForm;