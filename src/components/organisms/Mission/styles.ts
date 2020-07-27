import styled from 'styled-components';

import { rem } from 'polished';

import SectionContainer from '@templates/SectionContainer';

export const Container = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 240px 32px;

  div {
    margin-left: 64px;
  }

  h1 {
    display: inline-block;
    margin-bottom: 56px;
    font-size: ${rem('34px')};
    letter-spacing: 0.2em;

    background: ${({ theme }) => theme.colors.primary.active};
    padding: 10px 16px;
  }

  p {
    font-size: ${rem('18px')};
    letter-spacing: 0.2em;
    max-width: 572.6px;
    line-height: 175%;
  }
`;
