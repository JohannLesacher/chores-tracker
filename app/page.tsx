import Link from "next/link";
import {unstable_getServerSession} from "next-auth/next";
import {authOptions} from "../pages/api/auth/[...nextauth]";
import LogoutButton from "../components/auth/LogoutButton";

export default async function Home() {
    const session = await unstable_getServerSession(authOptions)

    return (
        <>
            {
                session ? (
                    <div>
                        <p>Bonjour {session.user.name}.</p>
                        <p>Vous pouvez <LogoutButton/> ou aller au <Link href={"/dashboard"}>dashboard</Link></p>
                    </div>
                ) : (
                    <div>
                        Pas encore connecté. <Link href={"/login"}>Se connecter</Link>
                    </div>
                )
            }
        </>
    )
}