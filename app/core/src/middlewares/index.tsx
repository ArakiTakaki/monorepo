import { MSWMiddleware } from './MSWMiddleware';
import { ReactQueryMiddleware } from './ReactQueryMiddleware';
import { ReduxMiddleware } from './ReduxMiddleware';
import { RouterMiddleware } from './RouterMiddleware';

export const MiddlewareProvider = () => {
  return (
    <>
      <MSWMiddleware>
        <ReduxMiddleware>
          <ReactQueryMiddleware>
            <RouterMiddleware />
          </ReactQueryMiddleware>
        </ReduxMiddleware>
      </MSWMiddleware>
    </>
  );
};
