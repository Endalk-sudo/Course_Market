import React from 'react'
import "./ToastNotification.css"
import Toast from './Toast';
import { useToast } from '../context/ToastContext';

const ToastNotification = () => {
    const { toasts, removeToast } = useToast();
    return (
        <div className='toast-container'>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={removeToast}
                />
            ))}
        </div>
    )
}

export default ToastNotification