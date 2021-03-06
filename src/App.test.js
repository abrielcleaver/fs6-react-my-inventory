import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  render(<App />);
  const name = screen.getByText(/greenhouse/i);
  expect(name).toBeInTheDocument();
});
