import styled from "styled-components";
import { MEDIA } from "../../../const";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem 5rem 3rem 5rem;

  nav {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
  }

  @media ${MEDIA.mobile} {
    padding: 2rem 0rem;
    nav {
      justify-content: center;
    }
  }

  @media ${MEDIA.tablet} {
    padding: 5rem 5rem 3rem 5rem;
  }
`;
