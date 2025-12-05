import './Credentials.css';

export default function Certificate(props) {
    return (
        <div className="cert-card">
            <div className="cert-logo">
                <img src={props.logo} alt="Certification Logo" />
            </div>
            <div className="cert-info">
                <h3 className="cert-name">{props.name}</h3>
                <p><strong>Issued:</strong> {props.issuedDate}</p>
                <p className="cert-id"><strong>Credential ID:</strong> {props.credentialId}</p>
            </div>
            <div className="cert-action">
                <a href="#" target="_blank" rel="noopener noreferrer" className="cert-btn">View Certificate</a>
            </div>
        </div>
    );
}