import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  try {
    const posts = await prisma.communityDBPost.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  } finally {
    await prisma.$disconnect();
  }
}
