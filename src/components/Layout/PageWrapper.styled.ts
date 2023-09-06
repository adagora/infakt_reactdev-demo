import styled from "styled-components";
import { MEDIA } from "../../const";

export const ContentPage = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 2.4rem 2.4rem 8rem;
  box-sizing: border-box;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-around;
  position: relative;
  max-width: 185rem;
  border-radius: 0.6rem;
  margin: 0 auto;
  min-height: 54rem;
  min-width: 54rem;
  font-size: 1.4rem;
  line-height: 1.4;

  > *:last-child {
    margin-top: auto;
  }

  @media ${MEDIA.mobile} {
    min-width: 26rem;
    padding: 1.4rem 1.4rem 2rem;
  }
`;
