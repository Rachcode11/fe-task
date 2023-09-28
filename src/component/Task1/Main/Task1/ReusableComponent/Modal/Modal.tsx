import React, { ReactNode } from 'react';
import './Modal.css';
import { CloseOutlined } from "@mui/icons-material";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    label?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, label }) => {
    if (!isOpen) return null;

    const handleSaveClick = () => {
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-header">
                {label}
            </div>
            <div className="modal">
                <div className="modal-content">{children}</div>

                <div className="footer">
                    <div className="close">
                        <CloseOutlined className="icon" onClick={onClose} />
                        <h4>Delete & reload</h4>
                    </div>
                    <button className="btn" onClick={handleSaveClick}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
