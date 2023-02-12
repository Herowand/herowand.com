import { createGlobalStyle } from "styled-components";
import localFont from "@next/font/local";

const hubotSans = localFont({
  src: "../pages/Hubot-Sans.woff2",
  variable: "--hubot-sans",
});

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${hubotSans.style.fontFamily};
    font-weight: 400;
    font-size: 16px;
    height: 100%;
    background-color: #953D3D !important;
    /* background-color: #0d0012;*/
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23190125'/%3E%3Cstop offset='1' stop-color='%23190125' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23210115'/%3E%3Cstop offset='1' stop-color='%23210115' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23330223'/%3E%3Cstop offset='1' stop-color='%23330223' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230D0012'/%3E%3Cstop offset='1' stop-color='%230D0012' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23240237'/%3E%3Cstop offset='1' stop-color='%23240237' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232F0202'/%3E%3Cstop offset='1' stop-color='%232F0202' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }

  * {
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth !important;
  }

  svg {
    vertical-align: top;
  }

  
  a {
    text-decoration: none;
    color: unset;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
