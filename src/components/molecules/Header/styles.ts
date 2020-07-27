import styled from 'styled-components';

import { rem } from 'polished';

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

  span {
    font-size: ${rem('36px')};
    font-weight: bold;

    line-height: 1.16em;
    letter-spacing: 0.35em;
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
`;
