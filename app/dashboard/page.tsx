import Link from "next/link";
import {authOptions} from "../../pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";
import {unstable_getServerSession} from "next-auth/next";

export default async function Dashboard() {
    const session = await unstable_getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    console.log(session);

    return (
        <>
            DASHBOARD
            <div>
                <ul>
                    <li><Link href={'/'}>Accueil</Link></li>
                    <li><Link href={'/login'}>Login</Link></li>
                </ul>
            </div>
        </>
    )
}