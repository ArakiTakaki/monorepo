import { ComponentProps } from 'react';
import Link from 'next/link';

// TODO: 他のリンクコンポーネントと共存させる
export const LinkComponent = (props: ComponentProps<typeof Link>) => {
  const { children, ...other } = props;

  if (process.env.NEXT_PUBLIC_TARGET === 'next') {
    return <Link {...other}>{children}</Link>;
  }

  const { href, ...otherProperties } = other;
  return (
    <a href={href.toString()} {...otherProperties}>
      {children}
    </a>
  );
};
