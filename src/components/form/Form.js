import React, { useState } from 'react';
import styles from '../../styles/form.css';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorNameMessage, setNameError] = useState(false);
    const [errorEmailMessage, setEmailError] = useState(false);
    const [errorTextAreaMessage, setTextAreaError] = useState(false);


    const handleNameValidation = (e) => {
        e.preventDefault();
        if (name.length == 0 || email.length == 0 || message.length == 0) {
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

        // Alert the user their first and last name, clear the inputs and thus resets the states
        alert(`Hello, ${name} who is sending "${message}" via your email, ${email}. This contact form is not currently operational.`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <form className="form" style={styles.form}>
                <div className='inputs'>
                    <span>
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
                            />
                        </div>
                        {errorNameMessage ? <label className="errorMsg">Name cannot be empty</label> : ""}
                    </span>
                    <div>
                        <label>Email:</label>
                        <div className="form-group">
                            <input
                                defaultValue={email}
                                name="email"
                                onChange={handleInputChange}
                                onBlur={handleEmailValidation}
                                type="email"
                                placeholder="jane_doe@email.com"
                            />

                        </div>
                        {errorEmailMessage ? <label className="errorMsg">Check your email</label> : ""}
                    </div>
                </div>

                <div>
                    <label>Message:</label>
                    <div className="form-group">
                        <textarea
                            defaultValue={message}
                            name="message"
                            onChange={handleInputChange}
                            onBlur={handleTextAreaValidation}
                            rows={6}
                        />
                    </div>
                    {errorTextAreaMessage ? <label className="errorMsg">Message cannot be empty</label> : ""}
                </div>

                <div className='button-container'>
                    <button className="submitBtn" type="button" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

