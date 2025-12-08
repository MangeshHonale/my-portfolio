import './ContactMe.css';
import ConfirmationCard from '../ContactMe/ConfirmationCard';
import { useState } from 'react';

export default function ContactMeModal({ onClose }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <span>
            <div id="contactModal" className="contact-modal show">
                {!isSubmitted && <div className="contact-box">
                    <button className="close-modal" onClick={onClose}>&times;</button>

                    <h2>Contact Me</h2>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Your name" />
                        </div>

                        <div className="form-group">
                            <label for="email">Email <span>*</span></label>
                            <input type="email" id="email" placeholder="you@example.com" required />
                        </div>

                        <div className="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Subject" />
                        </div>

                        <div className="form-group">
                            <label for="message">Message <span>*</span></label>
                            <textarea id="message" required placeholder="Type your message here..."></textarea>
                        </div>

                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>}
                {isSubmitted && <ConfirmationCard onClose={onClose}/>}
            </div>
            
        </span>
    );
}