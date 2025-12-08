import './ContactMe.css';

export default function ConfirmationCard({onClose}) {
    return (
        <div class="confirmation-card">
            <div class="confirmation-icon">✔</div>

            <h2 class="confirmation-title">Message Sent</h2>

            <p class="confirmation-text">
                Thank you for contacting me. Your message has been successfully submitted.
                I will review it and get back to you soon.
            </p>
            <button type="button" className="btn btn-primary" onClick={onClose}>OK</button>
        </div>

    );
}