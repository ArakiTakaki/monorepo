import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import IndexPage from '.';

test('index page component', async () => {
  render(<IndexPage />);
  // ACT
  userEvent.click(screen.getByText('+'));
  expect((await screen.findByTestId('result')).innerHTML).toBe('1');

  userEvent.click(screen.getByText('-'));
  expect((await screen.findByTestId('result')).innerHTML).toBe('0');
});
