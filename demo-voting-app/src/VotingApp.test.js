import { render, screen } from '@testing-library/react';
import VotingApp from './components/VotingApp';

test('renders Demo Voting App text', () => {
  render(<VotingApp />);
  const element = screen.getByText(/Demo Voting App/);
  expect(element).toBeInTheDocument();
});
