import React, { useState } from 'react';
import ExternalLinkButton from './ExternalLinkButton';
import ContactForm from './ContactForm';
import '../style/ContactContent.css';

const ContactContent = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onFormSubmitted = () => {
        setIsSubmitted(true);
    }

    var form = null;
    if (isSubmitted) {
        form = <h3 style={{color: "green"}}>Hey, thanks! I'll be in touch shortly.</h3>;
    } else {
        form = <ContactForm onFormSubmitted={onFormSubmitted} />
    }

    return (
        <div className="ContactContent Basic-Content">
            <h2>Where to Find Me</h2>
            <div id="ContactContent_LinkSection">
                <ExternalLinkButton label="Github" destination="https://github.com/tginick" />
                <ExternalLinkButton label="LinkedIn" destination="https://www.linkedin.com/in/tginick93" />
            </div>
            <h2>Let's Get in Touch!</h2>
            <p>Please fill out the following form, and I will get back to you as soon as I can!</p>
            
            {form}
        </div>
    );
}

export default ContactContent;