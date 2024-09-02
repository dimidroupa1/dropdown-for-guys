"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

import Image1 from "@public/images/Home/Services/1.webp";
import Image2 from "@public/images/Home/Services/2.webp";
import Image3 from "@public/images/Home/Services/3.webp";
import Image4 from "@public/images/Home/Services/4.webp";
import Image5 from "@public/images/Home/Services/5.webp";
import { bigTextStyle, paddingStyle } from "@/lib/theme";
import Service from "./Service";

const data = [
  {
    title: "Order a test spill",
    desc: "Our teamlists have a wealth of experience that they are willing to share to bring you the best results in ad flooding.",
    image: Image1,
    link: "/",
  },
  {
    title: "Mentorship and counseling from Team Leaders - $200 per hour",
    desc: "Our teamlists have a wealth of experience that they are willing to share to bring you the best results in ad flooding.",
    image: Image2,
    link: "/",
  },
  {
    title: "Account Shop",
    desc: "Our teamlists have a wealth of experience that they are willing to share to bring you the best results in ad flooding.",
    image: Image3,
    link: "/",
  },
  {
    title: "Agency Accounts",
    desc: "Our teamlists have a wealth of experience that they are willing to share to bring you the best results in ad flooding.",
    image: Image4,
    link: "/",
  },
  {
    title: "Landing Page, Creative, Deepfake, and Video Design",
    desc: "Our teamlists have a wealth of experience that they are willing to share to bring you the best results in ad flooding.",
    image: Image5,
    link: "/",
  },
];

type Props = {};

const Services = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(Image1);
  const [serviceActive, setServiceActive] = useState<{
    index: number;
    active: boolean;
  }>({
    index: 0,
    active: true,
  });

  return (
    <Container>
      <Main>
        <ImageContainer>
          <StyledImage src={selectedImage} alt="service-image" />
        </ImageContainer>
        <Content>
          <BigText>our services</BigText>
          <Divider />

          {data.map((item, index) => (
            <Service
              data={item}
              index={index}
              setServiceActive={setServiceActive}
              serviceActive={serviceActive}
              setSelectedImage={setSelectedImage}
            />
          ))}
        </Content>
      </Main>
    </Container>
  );
};

export default Services;

const Container = styled.section`
  ${paddingStyle}
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 50px;
  height: 100%;
`;

const ImageContainer = styled.div`
  flex: 0.3;
  position: sticky;
  top: 0px;
  align-self: flex-start;
`;

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  flex: 0.7;
  padding-top: 2.5%;
`;

const BigText = styled.h2`
  ${bigTextStyle}
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;
