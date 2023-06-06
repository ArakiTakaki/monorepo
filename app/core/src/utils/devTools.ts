import { is } from '@workspaces/utils';
import { createElement, lazy } from 'react';

export const RouterDevTool = is.production
  ? () => null
  : lazy(async () => {
      const { TanStackRouterDevtools } = await import('@tanstack/router-devtools');
      const memo = () => {
        return createElement(
          TanStackRouterDevtools,
          {
            position: 'bottom-right',
          },
          null
        );
      };

      return {
        default: memo,
      };
    });
