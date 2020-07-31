import Particles from 'react-particles-js';
import styled, { keyframes } from 'styled-components';

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

    z-index: 5;

    padding: 0 32px;
    color: ${({ theme }) => theme.colors.secondary.text};

    @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
      font-size: ${rem('32px')};
    }

    @media (max-width: ${({ theme }) => theme.sizes.phone}px) {
      font-size: ${rem('24px')};
    }
  }

  a {
    position: absolute;
    bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.phone}px) {
    min-height: 95vh;
  }
`;

export const Background = styled(Particles)`
  position: absolute;
  /* pointer-events: none; */

  height: 100%;
  width: 100%;

  z-index: 0;
`;

const slipDown = keyframes`
  to {
    transform: translate(-50%, 8px) translateZ(0);
  }
`;

export const ScrollButtom = styled.div`
  height: 64px;
  width: 32px;

  border: 2px solid ${({ theme }) => theme.colors.secondary.text};
  border-radius: 16px;

  &::before {
    content: '';
    position: absolute;
    display: block;

    top: 12px;
    left: 50%;
    transform: translate(-50%, 0) translateZ(0);
    animation: ${slipDown} 1.5s ease-out infinite alternate;

    height: 9px;
    width: 3px;

    background: ${({ theme }) => theme.colors.secondary.text};
    border-radius: 3px;
  }
`;
