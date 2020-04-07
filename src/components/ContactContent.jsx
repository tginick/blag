import React, { useState } from 'react';
import ExternalLinkButton from './ExternalLinkButton';
import '../style/Form.css';
import '../style/ContactContent.css';

const ContactContent = (props) => {
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

    };

    return (
        <div className="ContactContent">
            <h2>Where to Find Me</h2>
            <div id="ContactContent_LinkSection">
                <ExternalLinkButton label="Github" destination="https://github.com/tginick" />
                <ExternalLinkButton label="LinkedIn" destination="https://www.linkedin.com/in/tginick93" />
            </div>
            <h2>Let's Get in Touch!</h2>
            <p>Please fill out the following form, and I will get back to you as soon as I can!</p>
            
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
        </div>
    );
}

export default ContactContent;