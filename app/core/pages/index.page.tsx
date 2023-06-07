import { BaseLayout } from '@workspaces/react-base-layout';
import { navigate } from 'vite-plugin-ssr/client/router';

export { Page };

function Page() {
  return (
    <>
      <div>Hello!</div>
      <BaseLayout />
      <div>
        <button onClick={() => navigate('/')}>index</button>
        <button onClick={() => navigate('/about')}>About</button>
      </div>
    </>
  );
}
