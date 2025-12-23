import React, { useEffect } from 'react'
import { BsCheckCircle } from 'react-icons/bs';
import { MdError, MdClose } from 'react-icons/md';
import { FiAlertTriangle } from 'react-icons/fi';
import { useToast } from '../context/ToastContext';

import "./Toast.css"

const Toast = ({ id, message, type, onClose }) => {
    const { toasts } = useToast();
    const iconMap = {
        success: BsCheckCircle,
        error: MdError,
        warning: FiAlertTriangle
    };

    const IconComponent = iconMap[type] || FiAlertTriangle;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (toasts.length) {
                onClose(id)
            }
        }, 5000)

        return () => clearTimeout(timer)
    }, [id, onClose])

    return (
        <div className={`toast toast-${type}`}>
            <IconComponent />
            <p className='toast-message'>
                {message}
            </p>
            <button className='toast-close-btn' onClick={() => onClose(id)}><MdClose /></button>
        </div>
    )
}

export default Toast