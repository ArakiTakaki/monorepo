import fetch from 'node-fetch';

export { onBeforeRender };

async function onBeforeRender() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
  const comments = await response.json();
  return {
    pageContext: {
      pageProps: { comments },
    },
  };
}
