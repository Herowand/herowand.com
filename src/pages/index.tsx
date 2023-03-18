import { CardGradient } from "@/components/CardGradient";
import { FooterLinks } from "@/components/Footer";
import { HeaderMenu } from "@/components/HeaderMenu";
import { HeroText } from "@/components/Hero";
import {
  Image,
  Card,
  Center,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
  Button,
  Title,
} from "@mantine/core";
import Head from "next/head";

const links = [
  {
    label: "GitHub",
    link: "https://github.com/Herowand",
  },
  {
    label: "Discord",
    link: "https://discord.gg/yVyTtCRueq",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Herowand: Innovation Meets with Tools</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu links={links} />
      <HeroText />
      <Container>
        <Stack align="center" spacing="xs">
          <Text fw="bold" fz={20} c="white" opacity={0.3}>
            Backed by
          </Text>
          {/* <Flex gap="xl">
            {["Google", "Uber", "Trendyol", "Amazon"].map((company) => (
              <Text color="dimmed" fz={30} fw="bolder" key={company}>
                {company}
              </Text>
            ))}
          </Flex> */}
          <Button
            variant="light"
            component="a"
            href="https://github.com/sponsors/AykutSarac"
          >
            Become Backer
          </Button>
        </Stack>
      </Container>
      <Container className="repeating-grid" fluid>
        <Center pt={150} pb={300} component="section" id="apps">
          <Stack>
            <Title py="xl" color="white" order={1}>
              Created so far,
            </Title>
            <Grid>
              <Grid.Col span={6}>
                <CardGradient
                  href="https://jsoncrack.com"
                  image="https://cdn-1.webcatalog.io/catalog/json-crack/json-crack-icon-filled-256.png?v=1675593486109"
                  title="JSON Crack"
                  description="Visualize your JSON data instantly into graphs."
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <CardGradient title="Soon" description="What could it be?" />
              </Grid.Col>
            </Grid>
          </Stack>
        </Center>
      </Container>
      <FooterLinks
        data={[
          {
            title: "Developers",
            links: [
              {
                label: "Open Source",
                link: "https://herowand.com/oss",
              },
              {
                label: "Contributing",
                link: "https://github.com/AykutSarac/jsoncrack.com/blob/main/CONTRIBUTING.md",
              },
            ],
          },
          {
            title: "Herowand",
            links: [
              {
                label: "JSON Crack",
                link: "https://jsoncrack.com",
              },
              {
                label: "Terms of Service",
                link: "#",
              },
            ],
          },
          {
            title: "Social",
            links: [
              {
                label: "Twitter",
                link: "https://twitter.com/aykutsarach",
              },
              {
                label: "GitHub",
                link: "https://github.com/Herowand",
              },
              {
                label: "LinkedIn",
                link: "https://www.linkedin.com/company/herowand",
              },
            ],
          },
        ]}
      />
    </>
  );
}
