import './Credentials.css';
import Modal from '../Modal/Modal.jsx';
import FilePreview from '../FilePreview/FilePreview.jsx';
import { useState } from 'react';

export default function Certificate(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function closeModal() {
        setIsModalOpen(false);
    }
    return (
        <span>
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
                    <button type="button" className="btn btn-primary" onClick={() => setIsModalOpen(true)}>View Certificate</button>
                </div>
            </div>
            {isModalOpen && <Modal headerTitle="Certificate"
                                   onClose={closeModal}><FilePreview src={props.certLink}/></Modal>}
        </span>
    );
}