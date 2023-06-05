import SampleGame from '@/components/features/sampleGame';
import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.indexComponent}>
      <SampleGame />
    </div>
  );
};

export default IndexPage;
