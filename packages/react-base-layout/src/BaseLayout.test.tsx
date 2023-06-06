import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { BaseLayout } from './BaseLayout';

test('index page component', async () => {
  const { asFragment } = render(<BaseLayout />);
  expect(asFragment()).toMatchSnapshot();
});
