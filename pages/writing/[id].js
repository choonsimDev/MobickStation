import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import styled from "styled-components";
import Header from "@/components/Main/Header";
import LogoAndSearch from "@/components/Main/LogoAndSearch";
import CommunityList from "@/components/Community/CommunityList";
import Footer from "@/components/Main/Footer";
import Center from "@/components/Main/Center";

const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const PostWrapper = styled.div`
  width: 900px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #e6e6e6; // 테두리 색상 조정
  border-radius: 8px; // 테두리 둥글게
  gap: 10px;
  & div {
    font-size: 16px;
    color: #333; // 글자 색상 조정
  }
  & h4 {
    margin: 0;
    font-weight: 600;
    color: #444;
  }
`;

const CommentWrapper = styled.div`
  width: 1200px;
  margin-top: 20px;
  padding: 20px;
  background-color: #fafafa;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  gap: 10px;

  h3 {
    font-size: 18px;
    color: #444;
    margin-bottom: 15px;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

const CommentId = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const CommunityTitle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  margin-top: 10px;
  border-bottom: 1px solid #f1f1f1;
  & div:nth-child(1) {
    font-size: 18px;
    color: black;
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    & div:nth-child(1) {
      font-size: 14px;
      color: #777;
    }
    & div:nth-child(2) {
      font-size: 14px;
      color: #777;
    }
  }
`;

const CommentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  margin-top: 30px;
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

const CommentsSection = styled.div`
  width: 1200px;
  margin-top: 10px;
  padding: 12px;
  border-top: 3px solid #f6931a;
`;

const Comment = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  &:last-child {
    border-bottom: none;
  }
`;

const NoComments = styled.p`
  text-align: center;
  color: #777;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 20px;
`;

const CommentButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f6931a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e5821a;
  }
`;

const BackButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #777;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function UserProfile() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <p>Email: {session.user.email}</p>
      </div>
    );
  }

  return <p>You are not logged in.</p>;
}

export default function Writing() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session, status } = useSession(); // 세션 정보와 로딩 상태를 가져옵니다.

  const [post, setPost] = useState(null); // post 상태를 null로 초기화합니다.
  const [comment, setComment] = useState(""); // 댓글 내용을 위한 상태 추가
  const [comments, setComments] = useState([]); // 댓글 목록을 위한 상태 추가

  const readPostAndComments = async () => {
    if (!id) return; // id가 없다면 함수를 실행하지 않습니다.

    // 게시물 불러오기
    try {
      const postResponse = await fetch(`/api/getSinglePost?id=${id}`, {
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
      const commentsResponse = await fetch(`/api/getComments?postId=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!commentsResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const commentsData = await commentsResponse.json();
      setComments(commentsData); // 받아온 댓글 데이터로 comments 상태를 업데이트합니다.
    } catch (e) {
      console.error("Failed to load comments:", e);
    }
  };

  const submitComment = async () => {
    if (!comment.trim()) return alert("댓글을 입력해주세요.");
    if (status === "unauthenticated") {
      alert("로그인을 해주세요.");
      return; // 로그인하지 않은 상태면 여기서 함수 실행을 중단합니다.
    }

    try {
      const response = await fetch(`/api/setCommentPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: id,
          content: comment,
          nickname: session.user.name,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setComment(""); // 댓글 제출 후 입력 필드 초기화
      // 여기서 댓글 목록을 다시 불러오는 로직을 추가할 수 있습니다.
      location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  // 날짜 포맷 함수
  function formatDateTime(dateTimeStr) {
    const date = new Date(dateTimeStr);

    // 개별 구성요소를 추출
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth()는 0부터 시작하므로 +1 필요
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // 포맷에 맞게 조합
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  useEffect(() => {
    readPostAndComments();
  }, [id]); // id 값의 변화를 감지하여 변할 때마다 readPost 함수를 실행합니다.

  // 로딩 상태 처리를 위해 post가 null인 경우 로딩 메시지를 표시합니다.
  if (!post) return <div>Loading...</div>;

  return (
    <WriteWrapper>
      <Center>
        <Header />
        <LogoAndSearch />
        <CommunityList />
        <CommunityTitle>
          <div>[모비커 게시판] : {post.title}</div>
          <div>
            <div>작성자 : {post.nickname}</div> {/* 작성자 */}
            <div>날짜 : {formatDateTime(post.createdAt)}</div> {/* 날짜 */}
          </div>
          {/* 제목 */}
        </CommunityTitle>
        <PostWrapper>
          <div style={{ whiteSpace: "pre-wrap" }}>{post.content}</div>{" "}
        </PostWrapper>
        {/* 댓글 목록 표시 */}

        <div>
          <CommentTitle>댓글</CommentTitle>

          <CommentsSection>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Comment key={comment.id}>
                  <p>
                    <strong>{comment.nickname}</strong> (
                    {formatDateTime(comment.createdAt)}):
                  </p>
                  <p>{comment.content}</p>
                </Comment>
              ))
            ) : (
              <NoComments>댓글이 없습니다.</NoComments>
            )}
          </CommentsSection>
        </div>
        <CommentWrapper>
          {session ? (
            <CommentId>작성자 : {session.user.name}</CommentId> // 로그인한 사용자의 이름을 표시합니다.
          ) : (
            <CommentId>로그인이 필요합니다.</CommentId>
          )}
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
            style={{ width: "100%", height: "100px" }}
          ></textarea>
          <ButtonWrapper>
            <CommentButton onClick={submitComment}>댓글 작성</CommentButton>
            <BackButton onClick={() => router.back()}>뒤로가기</BackButton>
          </ButtonWrapper>
        </CommentWrapper>

        <Footer />
      </Center>
    </WriteWrapper>
  );
}
