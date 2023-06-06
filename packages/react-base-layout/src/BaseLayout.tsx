import * as styles from './BaseLayout.module.scss';
import image from './example.png';

export const BaseLayout = () => {
  return (
    <div className={styles.baseLayout}>
      hello component <img src={image} />
    </div>
  );
};
