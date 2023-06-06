import { lazy, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TMiddlewareComponent } from './interfaces';
import { is } from '@workspaces/utils';

const DevTool = lazy(async () => {
  return await import('@tanstack/react-query-devtools').then(({ ReactQueryDevtools }) => ({
    default: ReactQueryDevtools,
  }));
});

export const ReactQueryMiddleware: TMiddlewareComponent = (props) => {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>
      {is.development ? <DevTool /> : null}
      {props.children}
    </QueryClientProvider>
  );
};
