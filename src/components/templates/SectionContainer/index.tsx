import React from 'react';

import { Container } from './styles';

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
      <div className={className}>{children}</div>
    </Container>
  );
};

export default SectionContainer;
