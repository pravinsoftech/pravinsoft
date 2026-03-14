'use client';

import React from 'react';
import RegistrationForm from './RegistrationForm';

interface EnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
    if (!isOpen) return null;

    return (
        <>
            <div 
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 9998,
                    backdropFilter: 'blur(4px)'
                }} 
                onClick={onClose}
            />
            <div 
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '95%',
                    maxWidth: '500px',
                    zIndex: 9999,
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    borderRadius: '16px'
                }}
            >
                <button 
                    onClick={onClose}
                    style={{ 
                        position: 'absolute', 
                        top: '15px', 
                        right: '15px', 
                        background: 'rgba(0,0,0,0.2)', 
                        border: 'none', 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: 'white',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        zIndex: 10000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    ✕
                </button>
                <RegistrationForm />
            </div>
        </>
    );
}
