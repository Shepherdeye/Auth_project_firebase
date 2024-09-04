import React, { useState, useEffect } from 'react';
import './alert.css'; // Assuming the CSS file is named alert.css

const AlertX = ({ type, message, onClose }) => {
    const [visible, setVisible] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setVisible(false);
    //         if (onClose) onClose();
    //     }, 3000); // Auto-close after 3 seconds

    //     return () => clearTimeout(timer);
    // }, [onClose]);

    if (!visible) return null;

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <span className="alert-icon">✔</span>;
            case 'error':
                return <span className="alert-icon">⚠</span>;
            case 'warning':
                return <span className="alert-icon">⚠</span>;
            case 'info':
                return <span className="alert-icon">ℹ</span>;
            default:
                return null;
        }
    };

    return (
        <div className={`alert-container ${type}`}>
            {getIcon()}
            <div className="alert-message">{message}</div>
            <button className="alert-close" onClick={() => setVisible(false)}>
                ✖
            </button>
        </div>
    );
};

export default AlertX;
