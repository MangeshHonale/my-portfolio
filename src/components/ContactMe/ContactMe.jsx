import "./ContactMe.css";
import ConfirmationCard from "../ContactMe/ConfirmationCard";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMeModal({ onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loadedAt] = useState(Date.now());

  function handleSubmit(event) {
    event.preventDefault();
    const timeTakenToSubmit = Date.now() - loadedAt;
    const company = event.currentTarget.elements["company"].value;
    if (!company && timeTakenToSubmit > 3000) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          event.target,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setIsSubmitted(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <span>
      <div id="contactModal" className="contact-modal show">
        {!isSubmitted && (
          <div className="contact-box">
            <button className="close-modal" onClick={onClose}>
              &times;
            </button>

            <h2>Contact Me</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label for="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label for="message">
                  Message <span>*</span>
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <input
                type="text"
                name="company"
                tabIndex="-1"
                autoComplete="off"
                style={{ display: "none" }}
              />

              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>
        )}
        {isSubmitted && <ConfirmationCard onClose={onClose} />}
      </div>
    </span>
  );
}
