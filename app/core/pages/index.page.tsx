import { navigate } from 'vite-plugin-ssr/client/router';

export { Page };

function Page() {
  return (
    <>
      <div>Hello!</div>

      <div>
        <button onClick={() => navigate('/')}>index</button>
        <button onClick={() => navigate('/about')}>About</button>
      </div>
    </>
  );
}
