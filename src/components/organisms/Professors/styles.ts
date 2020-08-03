import styled from 'styled-components';

import { rem } from 'polished';

import SectionContainer from '@templates/SectionContainer';

export const Container = styled(SectionContainer)`
  > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 64px;

    padding: 40px 0 104px;

    > li {
      width: 393px;
      background: ${({ theme }) => theme.colors.secondary.background};
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
      }
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

      font-size: 1rem;
      line-height: 1.75em;
      letter-spacing: 0.05em;
    }
  }
`;

export const SocialList = styled.ul`
  display: flex;

  margin: 0 24px 24px;

  li {
    transition: transform 0.2s;

    a {
      color: ${({ theme }) => theme.colors.primary.active};
      transition: color 0.2s;
    }

    &:hover {
      a:hover {
        color: ${({ theme }) => theme.colors.secondary.active};
      }

      transform: scale(1.05);
    }
  }

  li + li {
    margin-left: 32px;
  }
`;
