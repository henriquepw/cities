import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  max-width: ${({ theme }) => theme.sizes.maxWidth}px;
  padding: 0 32px;
  margin: 0 auto;
`;
