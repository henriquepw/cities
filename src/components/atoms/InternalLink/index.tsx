import React from 'react';

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

interface InternalLinkProps extends AnchorProps {
  to: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({
  to,
  onClick,
  children,
  ...rest
}) => {
  function handleOnClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void {
    event.preventDefault();

    const elementTo = document.getElementById(to);

    elementTo?.scrollIntoView();

    onClick && onClick(event);
  }

  return (
    <a {...rest} href={`#${to}`} onClick={handleOnClick}>
      {children}
    </a>
  );
};

export default InternalLink;
