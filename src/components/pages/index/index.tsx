import { useState } from 'react';
import * as styles from './index.module.scss';

const IndexPage = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h3 className={styles.homeComponent}>Welcome Home!</h3>
      <div>
        <button data-testid="increment" onClick={() => setState((val) => val + 1)}>
          +
        </button>
        <div data-testid="result">{state}</div>
        <button data-testid="decrement" onClick={() => setState((val) => val - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
