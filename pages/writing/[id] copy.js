import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Center from "@/components/Main/Center";

export default function AnonymousWriting() {
  const router = useRouter();
  const { id } = router.query;
  // "anonymous-" 접두사를 제거하여 순수한 게시글 ID를 얻습니다.
  const postId = id.startsWith("anonymous-") ? id.slice(11) : id;

  // post 상태를 null로 초기화합니다.
  const [post, setPost] = useState(null);
  // 댓글 내용을 위한 상태 추가
  const [comment, setComment] = useState("");
  // 댓글 목록을 위한 상태 추가
  const [comments, setComments] = useState([]);

  const readPostAndComments = async () => {
    if (!postId) return; // 수정된 postId가 없다면 함수를 실행하지 않습니다.

    // 게시물 불러오기
    try {
      const postResponse = await fetch(`/api/getAnonymousPost?id=${postId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!postResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const postData = await postResponse.json();
      setPost(postData);
    } catch (e) {
      console.error(e);
    }

    // 댓글 불러오기
    try {
      const commentsResponse = await fetch(
        `/api/getComments?postId=${postId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!commentsResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const commentsData = await commentsResponse.json();
      setComments(commentsData);
    } catch (e) {
      console.error("Failed to load comments:", e);
    }
  };

  const submitComment = async () => {
    if (!comment.trim()) return alert("댓글을 입력해주세요.");

    try {
      const response = await fetch(`/api/setCommentPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: postId, content: comment }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setComment(""); // 댓글 제출 후 입력 필드 초기화
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readPostAndComments();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Center>
        <div>
          <h2>제목 : {post.title}</h2>
          <h4>작성자 : {post.nickname}</h4>
          <h4>날짜 : {formatDateTime(post.createdAt)}</h4>
          <hr />
          <br />
          <h4>글내용</h4>
          <div style={{ whiteSpace: "pre-wrap" }}>{post.content}</div>
        </div>
        <div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
            style={{ width: "100%", height: "100px" }}
          ></textarea>
          <button onClick={submitComment}>댓글 작성</button>
        </div>
        <div>
          <h3>댓글</h3>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <p>
                  <strong>{comment.nickname}</strong> (
                  {formatDateTime(comment.createdAt)}):
                </p>
                <p>{comment.content}</p>
              </div>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
          )}
        </div>
        <button onClick={() => router.back()}>뒤로가기</button>
      </Center>
    </>
  );
}

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
