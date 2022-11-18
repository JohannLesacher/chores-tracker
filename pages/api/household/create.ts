import {getSession} from 'next-auth/react';
import prisma from '../../../lib/prisma';
import {slugify} from "../../../utils/slugify";

export default async function handle(req, res) {
    const session = await getSession({req});
    if (!session) {
        res.statusCode = 403;
        return res;
    }

    const {name} = req.body;

    const result = await prisma.household.create({
        data: {
            name: name,
            slug: slugify(name),
            users: {
                create: {
                    user: {connect: {id: session?.user?.id}},
                    assignedAt: new Date(),
                }
            },
        },
    });
    res.json(result);
}