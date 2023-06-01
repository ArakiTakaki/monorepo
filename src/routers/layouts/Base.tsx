import { Link, Outlet } from '@tanstack/router';
import { RouterDevTool } from '../../utils/devTools';

export const BaseLayout = (): JSX.Element => {
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <RouterDevTool />
      <Outlet />
    </>
  );
};
