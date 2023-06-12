import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from "./utils/testLib";

test('renders learn react link', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/inMail/i);
  expect(linkElement).toBeInTheDocument();
});
