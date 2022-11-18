import Link from "next/link";
import {authOptions} from "../../pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";
import {unstable_getServerSession} from "next-auth/next";
import HouseholdsList from "../../components/household/HouseholdList";

export default async function Dashboard() {
    const session = await unstable_getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    return (
        <section className="dashboard">
            <div className="container">
                DASHBOARD
                <div>
                    <Link href="/dashboard/household/create">Create Household</Link>
                </div>
                {/* @ts-expect-error Server Component */}
                <HouseholdsList/>
            </div>
        </section>
    )
}