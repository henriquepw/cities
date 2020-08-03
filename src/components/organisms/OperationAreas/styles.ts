import styled from 'styled-components';

import { rem } from 'polished';

import SectionContainer from '@templates/SectionContainer';

interface AreaListProps {
  hexagonColor: string;
}

export const Container = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 64px;

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0 104px;

    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.secondary.background};

      width: 100%;
      height: 24px;

      top: 0;
    }
  }
`;

export const AreaItem = styled.li<AreaListProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  padding: 24px;
  background: ${({ theme }) => theme.colors.secondary.background};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.primary.text};
    opacity: 0.5;
  }

  &::before {
    width: 90%;
    height: 1px;

    top: -32px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    width: 1px;
    height: 90%;

    top: 50%;
    left: -32px;
    transform: translateY(-50%);
  }

  h2 {
    font-weight: 500;
    font-size: ${rem('24px')};
    line-height: 1.16em;
    letter-spacing: 0.05em;

    margin: 16px 0 24px;
    text-align: center;
  }

  p {
    max-width: 264px;
    margin-top: auto;

    font-size: ${rem('16px')};
    line-height: 1.75em;

    text-align: center;
    letter-spacing: 0.05em;
  }

  svg {
    height: 120px;
    opacity: 0.8;

    path {
      fill: ${(props) => props.hexagonColor};
    }
  }
`;
