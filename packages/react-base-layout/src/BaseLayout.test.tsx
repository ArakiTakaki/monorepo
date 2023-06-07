import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { BaseLayout } from './BaseLayout';
import { BaseLayoutMockProps } from './BaseLayout.mock';

test('index page component', async () => {
  const { asFragment } = render(<BaseLayout {...BaseLayoutMockProps()} />);
  expect(asFragment()).toMatchSnapshot();
});
