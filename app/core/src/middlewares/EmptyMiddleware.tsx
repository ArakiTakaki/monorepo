import { TMiddlewareComponent } from './interfaces';

export const EmptyMiddleware: TMiddlewareComponent = (props) => <>{props.children}</>;
