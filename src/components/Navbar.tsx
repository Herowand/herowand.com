import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
  gap: 8px;
  padding: 16px 40px;

  background: linear-gradient(180deg, #fff 25%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Link href="/">
        <StyledLogo>
          <img width="24" src="/logo.webp" alt="" />
          Herowand
        </StyledLogo>
      </Link>
    </StyledNavbar>
  );
};
