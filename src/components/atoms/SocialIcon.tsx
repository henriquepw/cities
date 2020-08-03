import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import styled from 'styled-components';

import LattesIcon from '@assets/svgs/lattes.svg';

interface SocialIconProps {
  name: 'github' | 'linkedin' | 'email' | 'lattes';
  className?: string;
}

const icons = {
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  email: IoMdMail,
  lattes: LattesIcon,
};

const SocialIcon: React.FC<SocialIconProps> = ({ name, className }) => {
  const Icon = icons[name];

  return <Icon className={className} size={34} />;
};

const SocialIconStyled = styled(SocialIcon)`
  height: 32px;
  width: 32px;
`;

export default SocialIconStyled;
