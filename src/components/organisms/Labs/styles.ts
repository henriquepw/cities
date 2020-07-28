import styled from 'styled-components';

import { rem } from 'polished';

import SectionContainer from '@templates/SectionContainer';

export const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 100%;
    max-width: 1256px;
    padding-bottom: 144px;
  }

  li {
    margin-top: 64px;
  }

  li + li {
    margin-top: 144px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    li + li {
      margin-top: 104px;
    }
  }
`;

export const Laboratory = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:first-of-type {
    position: relative;
    margin: 0 20px 20px 0;

    img {
      width: 100%;
      max-width: 522px;
      border-radius: 4px;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -1;

      height: 100%;
      width: 100%;

      left: 20px;
      top: 20px;

      border-radius: 4px;
      background: ${({ theme }) => theme.colors.primary.gradient};
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
  }

  h2 {
    font-size: ${rem('34px')};
    letter-spacing: 0.15em;

    margin-bottom: 32px;
    padding: 0 24px;
    position: relative;

    &::before {
      content: '';
      position: absolute;

      height: 120%;
      width: 4px;

      left: 0;
      top: 50%;
      transform: translateY(-50%);

      border-radius: 2px;
      background: ${({ theme }) => theme.colors.secondary.active};
    }
  }

  p {
    font-size: ${rem('18px')};
    letter-spacing: 0.2em;
    line-height: 1.5em;

    max-width: 540px;
  }

  div:nth-of-type(2) {
    margin-left: 56px;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;

    h2 {
      &::before {
        left: 100%;
      }
    }

    div:first-of-type {
      margin: 0 0px 20px 20px;

      &::before {
        left: -20px;
      }
    }

    div:nth-of-type(2) {
      margin-left: 0px;
      margin-right: 56px;
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    &,
    &:nth-child(even) {
      flex-direction: column;

      h2 {
        margin-top: 40px;
      }

      div:nth-of-type(2) {
        margin: 0px;
      }
    }
  }
`;
