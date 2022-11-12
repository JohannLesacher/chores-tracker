"use client"
import {signIn} from "next-auth/react";

export default function LoginButton() {
    return (
        <button onClick={() => signIn(undefined, {
            callbackUrl: `${window.location.origin}/dashboard`,
        })}>Sign in
        </button>
    )
}