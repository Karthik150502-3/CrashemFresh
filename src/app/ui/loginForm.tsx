'use client'
import React, { useActionState } from 'react'





export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );
    return (
        <form className='space-y-3'>

        </form>
    )
}
