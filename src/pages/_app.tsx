import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import "./global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withNormalizeCSS
      withCSSVariables
      withGlobalStyles
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
