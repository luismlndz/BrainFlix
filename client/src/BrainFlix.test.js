import { render, screen } from '@testing-library/react';
import BrainFlix from './BrainFlix';

test('renders learn react link', () => {
  render(<BrainFlix />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
