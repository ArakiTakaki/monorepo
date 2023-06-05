import { RouterProvider } from '@tanstack/router';
import { router } from '@/routers/routings';
import { TMiddlewareComponent } from './interfaces';

export const RouterMiddleware: TMiddlewareComponent = () => {
  return <RouterProvider router={router} />;
};
