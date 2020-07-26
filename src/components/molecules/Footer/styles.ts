import styled from 'styled-components';

import { rem } from 'polished';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

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
    }
  }

  p {
    text-align: center;
    font-size: ${rem('14px')};
    letter-spacing: 0.3em;
    margin-bottom: 32px;
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
`;
