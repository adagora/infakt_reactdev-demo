import React from "react";
import { HeaderWrapper } from "./Header.styled";
import logo from "../../../assets/logo.png";

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <nav>
        <img src={logo} alt="logo" width="146px" height="38px" />
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
