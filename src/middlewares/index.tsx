import { ReactQueryMiddleware } from './ReactQueryMiddleware';
import { ReduxMiddleware } from './ReduxMiddleware';
import { RouterMiddleware } from './RouterMiddleware';

export const MiddlewareProvider = () => {
  return (
    <>
      <ReduxMiddleware>
        <ReactQueryMiddleware>
          <RouterMiddleware />
        </ReactQueryMiddleware>
      </ReduxMiddleware>
    </>
  );
};
