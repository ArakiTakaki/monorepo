import Image from 'next/image';
import { getArtciles } from '@/repositories/microcms';
import styles from './page.module.scss';

// client
export default async function Home() {
  const item = await getArtciles();
  return (
    <main>
      <div className={styles.mainVisual}>
        {/* TODO: そのうちWebGLとかで置き換える */}
        <Image src="/main-visual3.png" alt="main visual" fill className={styles.image} />
        <p className={styles.text}>DEV BLOG</p>
        <div className={styles.bottom}></div>
      </div>
      <div style={{ paddingTop: '0px' }}>
        <div
          dangerouslySetInnerHTML={{ __html: item.contents[0].content }}
          style={{ width: '80vw', overflow: 'hidden' }}
        />
      </div>
    </main>
  );
}
