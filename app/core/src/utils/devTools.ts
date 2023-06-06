import { createElement, lazy } from 'react';
import { is } from '@workspaces/utils';

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
