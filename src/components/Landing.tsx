// src/components/Landing.tsx
import React from "react";
import styled from "styled-components";
import useTypewriterEffect from "../hooks/useTypewriterEffect";

const FullScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  font-family: "Roboto", sans-serif;
  background-color: white;
  color: black;
`;

const Content = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2.5em; /* Adjust size as needed */
  font-weight: 200; /* ExtraLight weight */
  font-family: "Source Code Pro", monospace; /* Apply Source Code Pro font */
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 300; /* Light weight, closest to 360 */
  font-family: "Source Code Pro", monospace;
  white-space: nowrap;
  overflow: hidden;

  &::after {
    content: "|";
    display: inline-block;
    animation: blinkCursor 0.75s steps(40) infinite;
  }

  @keyframes blinkCursor {
    50% {
      opacity: 0;
    }
  }
`;

const Landing: React.FC = () => {
  const typewriterText = useTypewriterEffect(
    ["Full Stack Developer", "Inventor"],
    150,
    100,
    2000,
  );
  return (
    <FullScreenWrapper>
      <Content>
        <Name>Diego Avellaneda</Name>
        <Title>{typewriterText}</Title>
      </Content>
    </FullScreenWrapper>
  );
};

export default Landing;
