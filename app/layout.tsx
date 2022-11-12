import React from "react";
import SessionProvider from "../contexts/SessionProvider";
import '../styles/globals.css'
import {unstable_getServerSession} from "next-auth/next";
import {authOptions} from "../pages/api/auth/[...nextauth]";

export default async function Layout({children, props}: {
    children: React.ReactNode,
    props?: any
}) {
    const session = await unstable_getServerSession(authOptions)

    return (
        <html lang="fr">
        <body>
        <SessionProvider session={session}>
            <main>{children}</main>
        </SessionProvider>
        </body>
        </html>
    );
}