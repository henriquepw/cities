import styled from 'styled-components';

import { rem } from 'polished';

import MoleculeMap from '@molecules/Map';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 40px 0 104px;
  max-width: 1320px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.sizes.bigTablet}px) {
    flex-direction: column-reverse;
  }
`;

export const Map = styled(MoleculeMap)`
  width: 100%;
  max-width: 546px;

  height: 498px;

  border: 8px solid ${({ theme }) => theme.colors.secondary.active};

  @media (max-width: ${({ theme }) => theme.sizes.bigTablet}px) {
    margin-top: 48px;
    max-width: 450px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 450px;

  background: ${({ theme }) => theme.colors.secondary.text};
  padding: 48px;

  letter-spacing: 0.15em;
  line-height: 175%;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  h2 {
    margin-bottom: 24px;
    font-size: ${rem('20px')};
  }

  h2:not(:first-of-type) {
    margin-top: 40px;
  }

  p,
  li {
    font-size: ${rem('16px')};
  }
`;
