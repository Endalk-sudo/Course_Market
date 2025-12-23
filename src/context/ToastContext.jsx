import React, { createContext, useContext, useState } from 'react'

const ToastContext = createContext()

export const useToast = () => {
    const context = useContext(ToastContext)

    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");

    }

    return context
}

const ToastProvider = ({ children }) => {

    const [toasts, setToasts] = useState([])

    const addToast = (message, type) => {
        const id = Date.now()
        setToasts((p) => [...p, { id, message, type }])
    }

    const removeToast = (id) => {
        setToasts((p) => p.filter((toast) => toast.id !== id))
    }

    return (
        <ToastContext.Provider value={{ addToast, toasts, removeToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider