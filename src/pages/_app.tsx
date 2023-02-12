import type { AppProps } from "next/app";
import GlobalStyle from "@/constants/globalStyle";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
