import { RootRoute, Route, Router } from '@tanstack/router';
import IndexPage from '@/components/pages/index';
import { Layout } from '../layouts/Base';

const rootRoute = new RootRoute({
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});

const routeTree = rootRoute.addChildren([indexRoute]);
export const router = new Router({
  routeTree,
});
