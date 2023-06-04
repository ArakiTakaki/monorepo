import { PixiComponent } from '@/components/commons/pixi/PixiComponent';
import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.indexComponent}>
      <PixiComponent />
    </div>
  );
};

export default IndexPage;
