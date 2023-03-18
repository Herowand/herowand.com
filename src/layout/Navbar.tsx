import React from "react";

import { HeaderMenu } from "@/components/HeaderMenu";

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

export const Navbar = () => <HeaderMenu links={links} />;
