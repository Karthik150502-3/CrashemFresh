import { Metadata } from 'next';
import LoginForm from '../ui/loginForm';
export const metadata: Metadata = {
    title: 'Login',
};

import React from 'react'

export default function page() {
    return (
        <div>Login page
            <LoginForm />
        </div>
    )
}
