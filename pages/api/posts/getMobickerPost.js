import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  try {
    const post = await prisma.dbCommunityPost.findUnique({
      where: { id: parseInt(id) },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 조회수 업데이트
    const updatedPost = await prisma.dbCommunityPost.update({
      where: { id: parseInt(id) },
      data: { views: post.views + 1 },
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post views:", error);
    res.status(500).json({ error: "Server error" });
  }
}
