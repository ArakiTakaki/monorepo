import { setupWorker } from 'msw'
import { handlers } from './handlers'

// 指定されたリクエストハンドラを持つサービスワーカーを設定する
export const browserWorker = setupWorker(...handlers)
