import React from 'react';

import { Container, Content } from './styles';

interface SectionProps {
  id: string;
  className?: string;
}

const SectionContainer: React.FC<SectionProps> = ({
  id,
  children,
  className,
  ...rest
}) => {
  return (
    <Container id={id} {...rest}>
      <Content className={className}>{children}</Content>
    </Container>
  );
};

export default SectionContainer;
