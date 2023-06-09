import Image from 'next/image';
import styles from './page.module.scss';

// client
export default async function Home() {
  return (
    <main>
      <div className={styles.mainVisual}>
        {/* TODO: そのうちWebGLとかで置き換える */}
        <Image src="/main-visual3.png" alt="main visual" fill className={styles.image} />
        <p className={styles.text}>DEV BLOG</p>
        <div className={styles.bottom}></div>
      </div>
      <div style={{ paddingTop: '0px' }}>next test</div>
    </main>
  );
}
