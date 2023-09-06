import { styled } from "styled-components";

export const CardWrapper = styled.div`
  border-radius: var(--medium-radius);
  border: var(--border);
  background-color: var(--color-background);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  width: 300px;
  height: 376px;
  margin: 10px;
  padding: 20px;
  opacity: 1;

  h1 {
    opacity: 1;
    color: var(--color-text-primary);
    font-size: 24px;
    font-weight: var(--font-weight-bold);
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 32px;
  }

  h2 {
    opacity: 1;
    color: var(--color-text-secondary);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 24px;
    margin: 0;
  }

  h3 {
    margin: 2.5rem auto 0rem;
    opacity: 1;
    color: var(--color-text-secondary);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 20px;
  }
  span {
    margin: 1.5rem auto 0.5rem;
    opacity: 1;
    color: var(--color-text-primary);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 24px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  height: 64px;
`;

export const CardImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  opacity: 1;
  background-size: 100%;
`;

export const CardTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 10px;
  height: 34px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 10px;
`;
