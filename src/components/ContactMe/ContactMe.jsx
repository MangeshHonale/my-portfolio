import './ContactMe.css';
import { useState } from 'react';
import ConfirmationCard from './ConfirmationCard.jsx';

export default function ContactMe() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function validateForm(form) {
        if (!form) return { valid: false, missing: ['form'] };
        const data = new FormData(form);
        const email = (data.get('email') || '').toString().trim();
        const message = (data.get('message') || '').toString().trim();
        const missing = [];
        if (!email) missing.push('Email');
        if (!message) missing.push('Message');
        return { valid: missing.length === 0, missing };
    }

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const result = validateForm(form);
        if (result.valid) {
            setIsSubmitted(true);
        } else {
            alert('Please fill required fields: ' + result.missing.join(', '));
            const firstMissing = result.missing[0];
            if (firstMissing === 'Email') {
                const el = form.querySelector('#email');
                if (el) el.focus();
            } else if (firstMissing === 'Message') {
                const el = form.querySelector('#message');
                if (el) el.focus();
            }
        }
    }
    return (
        <span>
            {!isSubmitted && <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="email" id="email" name="email" required placeholder="you@example.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="What is this regarding?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message <span>*</span></label>
                        <textarea id="message" name="message" required placeholder="Type your message here..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>}
            {isSubmitted && <ConfirmationCard />}
        </span>
    );
}