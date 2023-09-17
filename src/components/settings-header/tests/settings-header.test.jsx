import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SettingsHeader from '../settings-header.component';

test('it renders the text that is passes in as children', () => {
  render(<SettingsHeader>This is the header</SettingsHeader>);

  const headingText = screen.getByRole('heading', {
    name: /This is the header/,
  });
  expect(headingText).toBeInTheDocument();
});

test('Clicking on the icon fires the callback', async () => {
  const mockCallback = vi.fn();
  const user = userEvent.setup();

  render(
    <SettingsHeader callback={mockCallback}>This is the header</SettingsHeader>
  );

  const icon = screen.getByTestId('caret');
  await user.click(icon);

  expect(mockCallback).toHaveBeenCalledTimes(1);
});
