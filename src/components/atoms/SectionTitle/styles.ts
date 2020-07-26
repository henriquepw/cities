import styled from 'styled-components';

import { rem } from 'polished';

export const Container = styled.h1`
  position: relative;

  color: ${({ theme }) => theme.colors.primary.text};
  text-align: center;

  font-size: ${rem('36px')};
  line-height: 1.15em;
  letter-spacing: 0.15em;

  padding: 24px;
  margin-bottom: 64px;

  ::after {
    content: '';
    position: absolute;

    bottom: 0;
    left: 50%;

    height: 6px;
    width: 80px;

    background: ${({ theme }) => theme.colors.primary.gradient};
    border-radius: 3px;

    transform: translateX(-50%);
  }
`;
