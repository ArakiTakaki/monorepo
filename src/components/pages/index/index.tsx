import { useState } from 'react';

const IndexPage = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h3>Welcome Home!</h3>
      <div>
        <button onClick={() => setState((val) => val - 1)}>-</button>
        <div data-testid="result">{state}</div>
        <button onClick={() => setState((val) => val + 1)}>+</button>
      </div>
    </div>
  );
};

export default IndexPage;
