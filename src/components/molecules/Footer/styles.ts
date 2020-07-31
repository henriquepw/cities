import styled from 'styled-components';

import { rem } from 'polished';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  width: 100%;
  color: ${({ theme }) => theme.colors.secondary.text};

  background: ${({ theme }) => theme.colors.primary.active};

  ul {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 64px;
    grid-row-gap: 16px;

    h2 {
      font-size: ${rem('18px')};
      letter-spacing: 0.15em;
      margin-bottom: 8px;

      grid-column: 1/3;
    }

    li {
      font-size: ${rem('16px')};
      letter-spacing: 0.15em;
      white-space: nowrap;

      a {
        font-weight: normal;
      }
    }

    @media (max-width: ${({ theme }) => theme.sizes.phone}px) {
      grid-column-gap: 32px;
    }
  }

  p {
    text-align: center;
    font-size: ${rem('14px')};
    letter-spacing: 0.3em;
    margin: 0 32px 32px;
  }

  li a,
  p a {
    position: relative;

    &::after {
      content: '';
      position: absolute;

      left: 0;
      bottom: -4px;

      width: 100%;
      height: 2px;

      opacity: 0;
      transform: translateY(5px) translateZ(0);
      transition: opacity 0.3s, transform 0.3s;

      background: ${({ theme }) => theme.colors.secondary.text};
    }

    &:hover::after {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
  }

  a {
    color: ${({ theme }) => theme.colors.secondary.text};
    font-weight: bold;
  }
`;

export const Containt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  width: 100%;
  max-width: ${({ theme }) => theme.sizes.maxWidth}px;
  margin: 80px auto;
  padding: 0 10%;

  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    > a {
      margin-right: 32px;

      img:nth-of-type(2) {
        display: none;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.phone}px) {
    margin: 48px auto;
  }
`;
