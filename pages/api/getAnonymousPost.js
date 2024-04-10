import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export default async function handler(req, res) {
  try {
    // GET 요청에 대해서는 쿼리 파라미터에서 id를 가져옵니다.
    const { id } = req.query; // URL의 쿼리 스트링에서 id를 가져옵니다.

    if (req.method === "GET") {
      if (!id) {
        return res.status(400).json({ message: "ID is required" });
      }
      // 쿼리 파라미터로 받은 id 값을 정수로 변환합니다.
      const data = await client.dbAnonymousPost.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      console.log("data", data);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json(data);
    } else {
      // 지원하지 않는 HTTP 메서드에 대한 응답 처리
      res.setHeader("Allow", ["GET"]); // 허용된 메서드 목록을 응답 헤더에 추가
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
}
