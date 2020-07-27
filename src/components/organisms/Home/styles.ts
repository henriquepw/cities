import Particles from 'react-particles-js';
import styled from 'styled-components';

import { rem } from 'polished';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

    padding: 0 32px;
    color: ${({ theme }) => theme.colors.secondary.text};
  }
`;

export const Background = styled(Particles)`
  position: absolute;
  pointer-events: none;

  height: 100%;
  width: 100%;
`;
