import styled from 'styled-components';

import { rem } from 'polished';

import SectionContainer from '@templates/SectionContainer';

export const Container = styled(SectionContainer)`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 64px;

    padding: 40px 0 104px;

    li {
      background: ${({ theme }) => theme.colors.secondary.background};
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      width: 393px;
    }

    img {
      width: 100%;
      height: 342px;
      object-fit: cover;
    }

    h2 {
      padding: 16px 24px 20px;
      position: relative;

      font-size: ${rem('24px')};
      line-height: 1.75em;
      letter-spacing: 0.05em;

      &::after {
        content: '';
        position: absolute;

        left: 0;
        bottom: 0;

        width: 160px;
        height: 4px;
        background: ${({ theme }) => theme.colors.primary.active};
      }
    }

    p {
      margin: 16px 24px;
      margin-bottom: 24px;

      font-size: 1rem;
      line-height: 1.75em;
      letter-spacing: 0.05em;
    }
  }
`;
