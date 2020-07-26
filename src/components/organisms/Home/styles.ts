import styled from 'styled-components';

import { rem } from 'polished';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.primary.gradient};

  h1 {
    max-width: 870px;
    font-size: ${rem('40px')};
    font-weight: bold;

    text-align: center;
    letter-spacing: 0.15em;
    line-height: 150%;

    color: ${({ theme }) => theme.colors.secondary.text};
  }
`;
