import { Outlet } from '@tanstack/router';
import { BaseLayout } from '@workspaces/react-base-layout';
import { RouterDevTool } from '../../utils/devTools';

export const Layout = (): JSX.Element => {
  return (
    <>
      <RouterDevTool />
      <BaseLayout />
      <Outlet />
    </>
  );
};
