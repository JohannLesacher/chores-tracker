import {unstable_getServerSession} from "next-auth/next";
import {authOptions} from "../../pages/api/auth/[...nextauth]";
import LogoutButton from "../../components/auth/LogoutButton";
import LoginButton from "../../components/auth/LoginButton";

export default async function Login() {
    const session = await unstable_getServerSession(authOptions)
    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br/>
                <LogoutButton/>
            </>
        )
    }
    return (
        <>
            Not signed in <br/>
            <LoginButton/>
        </>
    )
}