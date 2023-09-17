import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../button.component';
import { theme } from '../../../styles/themes';
import { ArrowRight } from '@phosphor-icons/react';

test('the button text gets rendered', () => {
  render(<Button>click me</Button>);

  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
});

test('the callback gets fired when the button is clicked', async () => {
  const user = userEvent.setup();
  const mockCallback = vi.fn();
  render(<Button callback={mockCallback}>Click me</Button>);

  const button = screen.getByRole('button', { name: /click me/i });
  await user.click(button);
  await user.click(button);

  expect(mockCallback).toHaveBeenCalledTimes(2);
});

describe('the icons are rendering corectly', () => {
  test('the left icon is being rendered when passed in ', () => {
    render(<Button iconLeft={<ArrowRight aria-label="icon-left" />} />);

    const icon = screen.getByLabelText(/icon-left/i);
    expect(icon).toBeInTheDocument();
  });

  test('the right icon is being rendered when passed in ', async () => {
    render(<Button iconRight={<ArrowRight aria-label="icon-left" />} />);

    const icon = screen.getByLabelText(/icon-left/i);
    expect(icon).toBeInTheDocument();
  });

  test('2 icons are being rendered when passed in and set to duel', () => {
    render(
      <Button
        iconRight={<ArrowRight aria-label="icon" />}
        iconLeft={<ArrowRight aria-label="icon" />}
        duelIcon={true}
      />
    );

    const icons = screen.getAllByLabelText(/icon/i);
    expect(icons).toHaveLength(2);
  });
});

test('button is disabled if passed in as props', () => {
  render(<Button disabled>Click me</Button>);

  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeDisabled();
});

test('button is rendered with the color that is passed in', () => {
  render(<Button color={theme.colors.secondary}>Click me</Button>);

  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`);
});
