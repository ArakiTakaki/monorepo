import type { Preview } from '@storybook/react';
import '@workspaces/scss-util/reset.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const parameters = { layout: 'fullscreen' };
export default preview;
