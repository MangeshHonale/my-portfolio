import './Modal.css';

export default function Modal({children, headerTitle, onClose}) {
    return (
        <div id="certModal" className="modal-overlay show">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{headerTitle}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    {children}
                </div>

            </div>
        </div>
    );
}