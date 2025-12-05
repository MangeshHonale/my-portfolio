import Certificate from './Certificate';
import './Credentials.css';
import { CERTIFICATES } from './dataCredentials';

export default function Credentials() {
    return (
        <div class="cert-container">
            {CERTIFICATES.map((cert, index) => (
                <Certificate name={cert.name} issuedDate={cert.issuedDate} credentialId={cert.credentialId} logo={cert.logo} key={index} />
            ))}
        </div>

    );
}