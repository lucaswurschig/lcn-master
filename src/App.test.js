import { render } from '@testing-library/react';
import App from './App';

test('renders lcn header', () => {
  const { getByText } = render(<App />);
  const el = getByText(/lcn/i);
  expect(el).toBeInTheDocument();
});
