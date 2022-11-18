import Link from "next/link";
import {authOptions} from "../../pages/api/auth/[...nextauth]";
import {unstable_getServerSession} from "next-auth/next";
import {PrismaClient} from '@prisma/client'

export default async function HouseholdsList() {
    const session = await unstable_getServerSession(authOptions)

    const prisma = new PrismaClient()
    const households = await prisma.household.findMany({
        where: {
            users: {
                some: {
                    userId: session.user?.id
                }
            }
        },
    })

    return (
        <>
            {!!households.length && (
                <div className="households">
                    {
                        households.map(household => (
                            <div key={household.id}>
                                <h3>{household.name}</h3>
                                <Link href={`/dashboard/household/${household.slug}`}>Voir le foyer</Link>
                            </div>
                        ))
                    }
                </div>
            )}
        </>
    )
}
