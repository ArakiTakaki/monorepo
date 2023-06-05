import { Outlet } from '@tanstack/router';
import { RouterDevTool } from '../../utils/devTools';

export const BaseLayout = (): JSX.Element => {
  return (
    <>
      <RouterDevTool />
      <Outlet />
    </>
  );
};
