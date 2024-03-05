import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 2rem 0;
`;

const AboutMe: React.FC = () => {
  return (
    <Section>
      <h2>About Me</h2>
      <p>Information about Diego Avellaneda...</p>
    </Section>
  );
};

export default AboutMe;
