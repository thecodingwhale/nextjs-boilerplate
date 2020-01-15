import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../index';

test('shows the test message', () => {
  const testMessage = 'Test Message';
  render(<Title>{testMessage}</Title>);
  expect(screen.queryByText(testMessage)).toBeInTheDocument();
});
