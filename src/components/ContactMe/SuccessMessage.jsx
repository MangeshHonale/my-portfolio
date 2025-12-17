import './ContactMe.css';

export default function SuccessMessage() {
    return (
        <div className="success-wrapper">
            <div className="success-card">
                <div className="success-icon">✔</div>
                <h2>Message Sent Successfully</h2>
                <p>
                    Thank you for reaching out. Your message has been received and I will get back to you shortly.
                </p>

                <button className="close-success-btn">Close</button>
            </div>
        </div>

    );
}