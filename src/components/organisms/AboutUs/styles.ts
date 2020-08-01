import styled from 'styled-components';

import { rem } from 'polished';

import SectionContainer from '@templates/SectionContainer';

export const Container = styled(SectionContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: auto 0;
    padding-bottom: 64px;

    p,
    div {
      flex: 1;
    }

    img {
      width: 100%;
      height: auto;
      max-width: 584px;

      border: 8px solid ${({ theme }) => theme.colors.primary.active};
    }

    p {
      max-width: 584px;

      font-size: ${rem('18px')};
      line-height: 175%;
      letter-spacing: 0.1em;

      margin-left: 64px;
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.tablet}px) {
    > div {
      flex-direction: column;

      p {
        margin-top: 48px;
        margin-left: 0;

        font-size: ${rem('16px')};
      }
    }
  }
`;
