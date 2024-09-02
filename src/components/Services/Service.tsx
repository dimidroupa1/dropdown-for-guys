"use client";

import { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import ArrowIcon from "@public/icons/arrow-down-right.svg";

type Props = {
  data: {
    title: string;
    desc: string;
    image: StaticImageData;
    link: string;
  };
  index: number;
  setServiceActive: React.Dispatch<
    React.SetStateAction<{
      index: number;
      active: boolean;
    }>
  >;
  serviceActive: {
    index: number;
    active: boolean;
  };
  setSelectedImage: React.Dispatch<React.SetStateAction<StaticImageData>>;
};

const Service = ({
  data,
  index,
  setServiceActive,
  serviceActive,
  setSelectedImage,
}: Props) => {
  return (
    <>
      <Container>
        <Header
          onClick={() => {
            setServiceActive({
              index,
              active: true,
            });
            setSelectedImage(data.image);
          }}
          $isActive={serviceActive.active && serviceActive.index === index}
        >
          <Title>{data.title}</Title>
          <StyledImage
            src={ArrowIcon}
            alt=""
            $isActive={serviceActive.active && serviceActive.index === index}
          />
        </Header>

        <Content>
          <AnimatePresence initial={false}>
            {serviceActive.active && serviceActive.index === index && (
              <motion.div
                initial="close"
                animate="open"
                exit="close"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  close: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Content>
      </Container>
      <Divider />
    </>
  );
};

export default Service;

const Container = styled.div`
  width: 100%;
  padding: 60px 0;
`;

const Header = styled.div<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const StyledImage = styled(Image)<{ $isActive: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ $isActive }) =>
    $isActive ? "rotate(0deg)" : "rotate(90deg)"};
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 600;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

const Content = styled.div``;
