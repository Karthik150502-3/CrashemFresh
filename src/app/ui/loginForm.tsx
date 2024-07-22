'use client';
import { AtSign, Key, CircleAlert, MoveRight } from 'lucide-react'
// import { useActionState } from 'react';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { montserrat400 } from '@/fonts/montserrat';
import clsx from 'clsx';
export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useFormState(
        authenticate,
        undefined,
    );

    return (
        <form action={formAction} className={clsx("space-y-3", montserrat400.className, 'w-80 mx-auto')} >
            <div className="flex-1 rounded-lg bg-slate-900 px-6 pb-4 pt-8">
                <h1 className={`text-2xl`}>
                    Please log in to continue.
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-1 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block text-black w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-0 placeholder:text-black"
                                id="email"
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email address" />
                            <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-1 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer text-black block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-black"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                            <Key className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <button className="bg-cyan-950 flex p-3 rounded-sm flex-row items-center mt-4 w-full text-white" aria-disabled={isPending}>
                    Log in <MoveRight className="ml-auto h-5 w-5 text-gray-50" />
                </button>
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <>
                            <CircleAlert className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}