import { Flex, Image, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export const HerowandLogo = () => {
  return (
    <Link href="/">
      <Flex align="center" gap={4}>
        <Image src="logo.webp" width={28} alt="herowand logo" />
        <Text
          variant="gradient"
          gradient={{ from: "#BDBCBC", to: "#FFFFFF", deg: 360 }}
          fz={24}
          fw="bolder"
        >
          Herowand
        </Text>
      </Flex>
    </Link>
  );
};
