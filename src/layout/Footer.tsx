import { FooterLinks } from "@/components/FooterLinks";
import React from "react";

export const Footer = () => {
  return (
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
  );
};
