import { createRoot } from 'react-dom/client';
import { MiddlewareProvider } from './middlewares';
import 'ress';

const root = document.getElementById('application');
if (root == null) throw new Error('#application element is not found');
createRoot(root).render(<MiddlewareProvider />);
