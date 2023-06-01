import is from '@/utils/is';
import { EmptyMiddleware } from './EmptyMiddleware';
import { TMiddlewareComponent } from './interfaces';
import { useQuery } from '@tanstack/react-query';

const fetchWorker = async () => {
  const res = await import('@/mocks/browser');
  await res.browserWorker.start({
    onUnhandledRequest: (mockedReq, print) => {
    if (!/$\/api/.test(mockedReq.url.pathname)) return null;
    print.warning();
  }
  });
  return true;
}

export const MSWMiddleware: TMiddlewareComponent = is.production ? EmptyMiddleware : (props) => {
  const query = useQuery(['msw-worker'], fetchWorker);
  if (query.isLoading) return null;
  return (
    <>{props.children}</>
  )
}
