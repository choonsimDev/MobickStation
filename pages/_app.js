import { createGlobalStyle } from "styled-components";
import { SessionProvider } from "next-auth/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styles.css";

// quill editor
import "react-quill/dist/quill.snow.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url('/fonts/AppleSDGothicNeoL.ttf') format('truetype');
    font-weight: 300; /* Light */
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url('/fonts/AppleSDGothicNeoR.ttf') format('truetype');
    font-weight: 400; /* Regular */
  }
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: url('/fonts/AppleSDGothicNeoB.ttf') format('truetype');
    font-weight: 700; /* Bold */
  }

  
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      color: black;

  }
  *,*::before,*::after {
    box-sizing: border-box;
    font-family: 'AppleSDGothicNeo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #ffffff;
    font-family: 'AppleSDGothicNeo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
