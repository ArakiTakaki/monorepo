import { configureStore } from '@reduxjs/toolkit';
import { is } from '@workspaces/utils';
import logger from 'redux-logger';
import { counterReducer } from './counter/counter.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [is.development ? logger : null].filter(is.not.nullable),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
