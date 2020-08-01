import styled, { css } from 'styled-components';

import { Link } from 'gatsby';
import { rem } from 'polished';

interface NavProps {
  isOpened: boolean;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0;
  position: absolute;
  z-index: 5;

  width: 100%;
  max-width: 1224px;
  margin-top: 48px;
  padding: 0 32px;

  color: ${({ theme }) => theme.colors.secondary.text};

  @media (max-width: ${({ theme }) => theme.sizes.bigTablet}px) {
    margin-top: 32px;

    span {
      font-size: ${rem('24px')};
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    margin-top: 32px;

    span {
      font-size: ${rem('18px')};
    }
  }
`;

export const Title = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary.text};
  font-size: ${rem('36px')};
  font-weight: bold;

  line-height: 1.16em;
  letter-spacing: 0.35em;
`;

export const NavBar = styled.nav<NavProps>`
  button {
    display: none;
    width: 32px;

    span {
      display: block;

      height: 2px;
      width: 100%;

      background: ${({ theme }) => theme.colors.secondary.text};
    }

    span + span {
      margin-top: 6px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      font-size: ${rem('16px')};
      font-weight: bold;
      line-height: 1.1875em;
      letter-spacing: 0.15em;
    }

    li + li {
      margin-left: 32px;
    }

    a {
      color: ${({ theme }) => theme.colors.secondary.text};

      padding: 10px 24px;
      border-radius: 4px;

      transition: color 0.2s, background 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.text};
        background: ${({ theme }) => theme.colors.secondary.text};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.bigTablet}px) {
    button {
      display: block;
      cursor: pointer;
      position: fixed;

      top: 32px;
      right: 32px;

      z-index: 10;
      padding: 4px;
    }

    ul {
      flex-direction: column;
      justify-content: center;
      position: fixed;

      opacity: 0;
      pointer-events: none;

      width: 100%;
      height: 100%;

      top: 0;
      left: 0;

      background: ${({ theme }) => theme.colors.secondary.text};

      a {
        color: ${({ theme }) => theme.colors.secondary.active};
      }

      li {
        font-size: ${rem('20px')};
      }

      li + li {
        margin-left: 0;
        margin-top: 40px;
      }
    }

    ${({ isOpened }) =>
      isOpened &&
      css`
        button {
          span {
            background: ${({ theme }) => theme.colors.secondary.active};
          }
        }

        ul {
          opacity: 1;
          pointer-events: all;
        }
      `}
  }
`;
