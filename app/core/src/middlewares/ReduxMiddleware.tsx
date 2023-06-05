import { Provider } from 'react-redux';
import { store } from '../stores';
import { TMiddlewareComponent } from './interfaces';

export const ReduxMiddleware: TMiddlewareComponent = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
