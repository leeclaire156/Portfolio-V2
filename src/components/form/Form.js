import React, { useState, useRef } from 'react';
import styles from '../../styles/form.css';
import emailjs from '@emailjs/browser';


export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorNameMessage, setNameError] = useState(false);
    const [errorEmailMessage, setEmailError] = useState(false);
    const [errorTextAreaMessage, setTextAreaError] = useState(false);
    const form = useRef();
    const service = 'service_ib4ursb';
    const template = 'template_pu8siqy';
    const publickey = 'GTXGCHMzyiX7vGnMp';

    const handleNameValidation = (e) => {
        e.preventDefault();
        if (name.length == 0) {
            setNameError(true)
        } else {
            setNameError(false)
        }
    }

    const handleEmailValidation = (e) => {
        e.preventDefault();
        if (email.length == 0) {
            setEmailError(true)
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    const handleTextAreaValidation = (e) => {
        e.preventDefault();
        if (message.length == 0) {
            setTextAreaError(true)
        } else {
            setTextAreaError(false)
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        return name === 'name' ? setName(value) : (name === 'message' ? setMessage(value) : setEmail(value));
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (errorNameMessage == true || errorEmailMessage == true || errorTextAreaMessage == true) {
            return alert("Please check your input.");
        }

        emailjs.sendForm(service, template, form.current, publickey)
            .then((result) => {
                console.log(result.text);
                alert("Success!");
            }, (error) => {
                console.log(error.text);
                alert("Error with sending email.")
            });


        setName('');
        setEmail('');
        setMessage('');

        var textArea = document.getElementById('messageArea');
        textArea.value = '';

        var emailInput = document.getElementById('emailInput');
        emailInput.value = '';
    };

    return (
        <div>
            <form ref={form} onSubmit={handleFormSubmit} className="form" style={styles.form}>
                <div className='inputs'>
                    <div>
                        <label>Name:</label>
                        <div className="form-group">
                            <input
                                value={name}
                                name="name"
                                onChange={handleInputChange}
                                // onblur event occurs when an HTML element loses focus (in this case, user leaves form field)
                                onBlur={handleNameValidation}
                                type="text"
                                placeholder="Jane Doe"
                                id="nameInput"
                            />
                        </div>
                        {errorNameMessage ? <label className="errorMsg nameError">Name cannot be empty</label> : ""}
                    </div>

                    <div>
                        <label>Email:</label>
                        <div className="form-group">
                            <input
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                onBlur={handleEmailValidation}
                                type="email"
                                placeholder="jane_doe@email.com"
                                id="emailInput"
                            />
                        </div>
                        {errorEmailMessage ? <label className="errorMsg emailError">Check your email</label> : ""}
                    </div>
                </div>

                <div>
                    <label>Message:</label>
                    <div className="form-group">
                        <textarea
                            name="message"
                            onChange={handleInputChange}
                            onBlur={handleTextAreaValidation}
                            rows={6}
                            placeholder="Enter your message"
                            id="messageArea"
                        />
                    </div>
                    {errorTextAreaMessage ? <label className="errorMsg msgError">Message cannot be empty</label> : ""}
                </div>

                <div className='button-container'>
                    <button className="submitBtn" type="submit" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
                <div className='washiTape rightTape tape3' aria-hidden="true"></div>
                <div className='washiTape leftTape tape4' aria-hidden="true"></div>
            </form>
        </div>
    );
}

