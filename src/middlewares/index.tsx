import { MSWMiddleware } from './MSWMiddleware';
import { ReactQueryMiddleware } from './ReactQueryMiddleware';
import { ReduxMiddleware } from './ReduxMiddleware';
import { RouterMiddleware } from './RouterMiddleware';

export const MiddlewareProvider = () => {
  return (
    <>
      <ReduxMiddleware>
        <ReactQueryMiddleware>
          <MSWMiddleware>
            <RouterMiddleware />
          </MSWMiddleware>
        </ReactQueryMiddleware>
      </ReduxMiddleware>
    </>
  );
};
