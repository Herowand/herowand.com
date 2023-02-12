import { SeoTags } from "@/components/SeoTags";
import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head>
          <SeoTags
            image="og_image.png"
            description="Creating innovative next-generation software solutions for the people of tech industry."
            title="Herowand: Innovation Meets with Tools"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
