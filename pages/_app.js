import { createGlobalStyle } from "styled-components";
import { SessionProvider } from "next-auth/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styles.css";

// import Swiper core and required modules

const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,*::before,*::after {
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #ffffff;
    font-family: "Pretendard Variable", Pretendard;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
