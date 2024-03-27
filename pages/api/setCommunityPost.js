import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function handler(req, res) {
    try {
        console.log('req.body', req.body);
        const { title, nickname, password, content } = req.body;


        const data = await client.dbCommunityPost.create({
            data: {
                title: title,
                nickname: nickname,
                password: password,
                content: content
            }
        });
        console.log('data', data);
        res.status(200).json(data);

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Internal server error' });
    }
}