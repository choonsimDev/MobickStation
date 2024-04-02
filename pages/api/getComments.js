import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // URL 쿼리에서 postId 값을 추출합니다.
        const { postId } = req.query;

        if (!postId) {
            return res.status(400).json({ message: "postId is required" });
        }

        try {
            // Prisma 클라이언트를 사용하여, 주어진 postId에 해당하는 모든 댓글을 조회합니다.
            const comments = await prisma.comment.findMany({
                where: {
                    postId: parseInt(postId, 10), // 문자열로 받은 postId를 숫자로 변환합니다.
                },
                orderBy: {
                    createdAt: 'desc' // 댓글을 최신 순으로 정렬합니다.
                }
            });

            // 조회된 댓글 목록을 클라이언트에 반환합니다.
            return res.status(200).json(comments);
        } catch (error) {
            console.error('Error fetching comments:', error);
            return res.status(500).json({ message: "Error fetching comments" });
        }
    } else {
        // GET 메서드가 아닌 다른 HTTP 메서드로 요청이 들어온 경우, 에러 메시지를 반환합니다.
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}