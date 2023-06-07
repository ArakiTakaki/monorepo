import * as styles from './BaseLayout.module.scss';
import { ImageComponent } from './ImageComponent';
import image from './example.png';

export const BaseLayout = () => {
  return (
    <div className={styles.baseLayout}>
      hello component <ImageComponent src={image} width={300} alt="alt" />
    </div>
  );
};
