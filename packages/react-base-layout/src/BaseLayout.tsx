import { FC } from 'react';
import clsx from 'clsx';
import styles from './BaseLayout.module.scss';
import { ImageComponent } from './ImageComponent';
import { LinkComponent } from './LinkComponent';

export interface BaseLayoutProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  hide?: boolean;
  iconImage: Image.Content;
  links?: {
    href: string;
    name: string;
  }[];
}
export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  title,
  hide,
  iconImage,
  links = [
    {
      href: '/blog',
      name: 'blog',
    },
    {
      href: '/game',
      name: 'game',
    },
  ],
}) => {
  return (
    <div className={clsx(styles.contentWrap, hide && styles['-hide'])}>
      <header className={styles.header}>
        <div className={styles.baseLayout}>
          <h1 className={styles.title}>
            <ImageComponent className={styles.image} width={50} height={50} {...iconImage} />
            <span className={styles.text}>{title}</span>
          </h1>
          <div className={styles.contents}>
            <ul className={styles.linkContent}>
              {links.map(({ href, name }) => {
                return (
                  <li key={href}>
                    <LinkComponent href={href}>{name}</LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
      <main className={styles.body}>{children}</main>
    </div>
  );
};
