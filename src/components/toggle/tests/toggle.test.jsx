import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toggle from '../toggle.component';

describe('the toggle starts at the correct position, set by isOnInitial', () => {
  test('The toggle starts at the isOnInital = false position', async () => {
    render(<Toggle isOnInitial={false} />);

    const toggle = screen.getByTestId('inner-toggle');
    expect(toggle).toHaveStyle('justify-content: flex-start');
  });

  test('The toggle starts at the isOnInital = true position', async () => {
    render(<Toggle isOnInitial={true} />);

    const toggle = screen.getByTestId('inner-toggle');
    expect(toggle).toHaveStyle('justify-content: flex-end');
  });
});

test('that the correct "test on" text is being displayed when the toggle is on', () => {
  render(<Toggle isOnInitial={true} textOn="this is the on text" />);

  const text = screen.getByText('this is the on text');
  expect(text).toBeInTheDocument();
});

test('that the text and toggle change when clicking on the toggle', async () => {
  const user = userEvent.setup();
  render(
    <Toggle
      textOn="onText"
      textOff="offText"
      callback={vi.fn()}
      isOnInitial={true}
    />
  );

  const toggle = screen.getByRole('switch');
  const toggleText = screen.getByTestId('toggle-text');
  expect(toggle).toBeChecked();
  expect(toggleText).toHaveTextContent(/onText/i);

  await user.click(toggle);

  expect(toggle).not.toBeChecked();
  expect(toggleText).toHaveTextContent(/offText/i);
});

test('clicking the toggle fires the callback', async () => {
  const mockCallback = vi.fn();
  const user = userEvent.setup();
  render(<Toggle callback={mockCallback} isOnInitial={true} />);

  const toggle = screen.getByRole('switch');
  await user.click(toggle);
  expect(mockCallback).toHaveBeenCalledWith(false);
});
