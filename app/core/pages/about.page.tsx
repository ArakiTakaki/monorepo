import { useState } from 'react';
import { navigate } from 'vite-plugin-ssr/client/router';

export { Page };

interface AboutPageProps {
  comments: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  } | null;
}
function Page({ comments = null }: AboutPageProps) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>About Page Test</div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>++</button>
      <div>{comments !== null ? JSON.stringify(comments) : ''}</div>

      <div>
        <button onClick={() => navigate('/')}>index</button>
        <button onClick={() => navigate('/about')}>About</button>
      </div>
    </>
  );
}
