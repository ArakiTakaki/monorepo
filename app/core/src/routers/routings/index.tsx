import { RootRoute, Route, Router } from '@tanstack/router';
import IndexPage from '@/components/pages/index';
import { BaseLayout } from '../layouts/Base';

const rootRoute = new RootRoute({
  component: BaseLayout,
});
import.meta.resolve;

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});

const routeTree = rootRoute.addChildren([indexRoute]);
export const router = new Router({
  routeTree,
});
