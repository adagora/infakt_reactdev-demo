import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column wrap;
  main {
    flex: 0 1 auto;
    margin: 0rem auto 5rem;
    width: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.3rem;
    line-height: 1.2;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
  <Wrapper>
    <Header />
    <main>{children}</main>
  </Wrapper>
);

export default Layout;
