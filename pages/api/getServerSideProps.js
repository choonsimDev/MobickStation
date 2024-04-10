import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  // 세션에서 사용자 정보 추출
  const { user } = session;

  return {
    props: { user }, // 페이지에 사용자 정보를 props로 전달
  };
}
