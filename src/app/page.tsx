"use client";

import Services from "@/components/Services/Services";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Services />
    </Container>
  );
}

const Container = styled.main`
  height: 100svh;
  width: 100%;
`;
