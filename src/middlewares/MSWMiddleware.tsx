import { useLayoutEffect, useState } from 'react';
import is from '@/utils/is';
import { EmptyMiddleware } from './EmptyMiddleware';
import { TMiddlewareComponent } from './interfaces';

const fetchWorker = async () => {
  const res = await import('@/__mocks__/browser');
  await res.browserWorker.start({
    onUnhandledRequest: (mockedReq, print) => {
      if (!/$\/api/.test(mockedReq.url.pathname)) return null;
      print.warning();
    },
  });
  return true;
};

export const MSWMiddleware: TMiddlewareComponent = is.production
  ? EmptyMiddleware
  : (props) => {
      // HACK: react query の場合 client ごと更新されるため MSWのstart eventが複数呼ばれてしまうため更新
      const [isLoading, setIsLoading] = useState(true);

      useLayoutEffect(() => {
        fetchWorker().then(() => setIsLoading(false));
      }, []);

      if (isLoading) return null;
      return <>{props.children}</>;
    };
