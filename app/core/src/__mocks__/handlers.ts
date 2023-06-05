import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (_req, res, ctx) => {
    // ユーザーの認証をセッションに永続させる
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // 200のステータスコードで応答する
      ctx.status(200)
    );
  }),

  rest.get('/user', (_req, res, ctx) => {
    // ユーザーが認証されているかどうかを確認する
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // 認証されていない場合、403エラーで応答する
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    // 認証された場合、模擬ユーザの情報を返す
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];
