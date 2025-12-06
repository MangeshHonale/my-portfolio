import Certificate from './Certificate';
import './Credentials.css';
import { CERTIFICATES } from './dataCredentials';

export default function Credentials() {
    return (
        <div className="cert-container">
            {CERTIFICATES.map((cert, index) => (
                <Certificate name={cert.name} 
                             issuedDate={cert.issuedDate} 
                             credentialId={cert.credentialId} 
                             certLink={cert.certLink}
                             logo={cert.logo} key={index} />
            ))}
        </div>

    );
}