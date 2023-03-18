import { Box, Container, Flex, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import Layout from "@/layout/Layout";

const Oss: React.FC<{ sponsors: any[] }> = ({ sponsors }) => {
  return (
    <Layout>
      <Container>
        <Image
          mx="auto"
          src="oss_banner.webp"
          radius="md"
          maw={800}
          alt="oss banner"
        />
      </Container>
      <Container py={50}>
        <Title pb="md">Thank you!</Title>
        <Text maw={500}>
          &ldquo;We would like to extend our sincerest gratitude to all of our
          sponsors for their invaluable support and contribution towards
          Herowand.&rdquo;
        </Text>
      </Container>
      <Container>
        <Title order={3} pb="xl">
          Sponsors
        </Title>
        <Flex gap={40} wrap="wrap" justify="center">
          {sponsors?.map((sponsor) => (
            <Link href={sponsor.profile} key={sponsor.handle}>
              <Image
                radius="md"
                width={80}
                src={sponsor.avatar}
                alt={sponsor.handle}
                caption={sponsor.handle}
              />
            </Link>
          ))}
        </Flex>
      </Container>
    </Layout>
  );
};

export default Oss;

export async function getStaticProps() {
  const res = await fetch("https://ghs.vercel.app/sponsors/aykutsarac");
  const data = await res.json();

  return {
    props: {
      sponsors: data?.sponsors.reverse() || [],
    },
  };
}
