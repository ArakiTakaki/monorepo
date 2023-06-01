import { lazy } from 'react';
import is from './is';

export const RouterDevTool = is.production
  ? () => null
  : lazy(() => {
      return import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      }));
    });
