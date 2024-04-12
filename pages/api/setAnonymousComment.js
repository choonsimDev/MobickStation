import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { postId, content, nickname = '익명', password = '0000' } = req.body;

        try {
            // Prisma를 사용하여 댓글을 데이터베이스에 저장합니다.
            // 여기서는 예시로 Comment 모델에 해당하는 댓글을 저장하는 로직을 가정합니다.
            const comment = await client.commentAnonymous.create({
                data: {
                    content,
                    nickname,
                    password, // 비밀번호는 해싱하여 저장하는 것을 권장합니다.
                    postId: parseInt(postId, 10), // postId가 문자열로 오는 경우가 있으므로, 정수로 변환합니다.
                },
            });

            // 성공적으로 댓글이 저장되면, 저장된 댓글 정보를 반환합니다.
            return res.status(200).json(comment);
        } catch (error) {
            // 데이터베이스 저장 중 에러가 발생한 경우, 에러 메시지를 반환합니다.
            console.error('Failed to submit comment:', error);
            return res.status(500).json({ message: '댓글을 저장하는데 실패했습니다.' });
        }
    } else {
        // POST 요청이 아닌 경우, 405 Method Not Allowed 상태 코드를 반환합니다.
        return res.status(405).end('Method Not Allowed');
    }
}