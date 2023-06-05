import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import IndexPage from '.';

test('index page component', async () => {
  render(<IndexPage />);
  expect((await screen.findByTestId('result')).innerHTML).toBe('0');

  await userEvent.click(await screen.findByTestId('increment'));
  expect((await screen.findByTestId('result')).innerHTML).toBe('1');

  await userEvent.click(await screen.findByTestId('decrement'));
  expect((await screen.findByTestId('result')).innerHTML).toBe('0');
});
