import Layout from "@/layout/Layout";
import { Container, List, Stack, Text, Title } from "@mantine/core";
import React from "react";

const Privacy = () => {
  return (
    <Layout>
      <Container>
        <Stack>
          <Title>Privacy Policy</Title>
          <Text>
            Herowand.com is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and disclose information about
            you when you visit our website or use our application (collectively,
            &quot;Services&quot;). By using our Services, you consent to our
            collection, use, and disclosure of information about you as
            described in this Privacy Policy.
          </Text>
          <Title order={2}>1. Information We Collect</Title>
          <Text>
            We may collect information about you in various ways, including:
            <List>
              <List.Item>
                Information you provide to us: We may collect information you
                provide to us directly, such as your name, email address, phone
                number, or other contact information.
              </List.Item>
              <List.Item>
                Information we collect automatically: We may automatically
                collect certain information about you when you use our Services,
                such as your IP address, browser type, operating system, and
                device information.
              </List.Item>
              <List.Item>
                Information we receive from third parties: We may receive
                information about you from third parties, such as social media
                platforms or other services that you use to connect with our
                Services.
              </List.Item>
            </List>
          </Text>
          <Title order={2}>2. How We Use Your Information</Title>
          <Text>
            We may use the information we collect about you for various
            purposes, including:
            <List>
              <List.Item>
                To provide and improve our Services: We may use your information
                to provide and improve our Services, to communicate with you
                about your account or our Services, and to personalize your
                experience with our Services.
              </List.Item>
              <List.Item>
                To analyze and understand our users: We may use your information
                to analyze and understand our users, to develop new features and
                services, and to improve our Services.
              </List.Item>
              <List.Item>
                To comply with legal obligations: We may use your information to
                comply with legal obligations, such as responding to subpoenas
                or other legal requests, or to enforce our terms of service.
              </List.Item>
            </List>
          </Text>
          <Title order={2}>3. Information Sharing and Disclosure</Title>
          <Text>
            We may share your information with third parties in various
            circumstances, such as:
            <List>
              <List.Item>
                With service providers: We may share your information with
                third-party service providers who help us provide our Services,
                such as hosting providers, payment processors, or customer
                support providers.
              </List.Item>
              <List.Item>
                With our affiliates: We may share your information with our
                affiliates, such as subsidiaries or parent companies, to provide
                you with information about products or services that may be of
                interest to you.
              </List.Item>
              <List.Item>
                With your consent: We may share your information with third
                parties with your consent, such as when you authorize us to
                share your information with a partner or sponsor.
              </List.Item>
            </List>
            We may also disclose your information in response to a legal
            request, such as a subpoena or court order, or to protect our rights
            or the rights of others.
          </Text>
          <Title order={2}>4. Deletion of Data</Title>
          <Text>
            You can contact the support team to have your data deleted.
          </Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Privacy;
