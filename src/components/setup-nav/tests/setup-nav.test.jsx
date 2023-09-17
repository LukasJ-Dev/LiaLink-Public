import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import SetupNav from '../setup-nav.component';
import { theme } from '../../../styles/themes';

const mockNavItems = ['item1', 'item2', 'item3', 'item4'];

test('it renders the nav items when passed in as props', () => {
  const mockFn = vi.fn();
  render(<SetupNav callback={mockFn} navItems={mockNavItems} />);

  const navItems = screen.getAllByRole('link');
  expect(navItems).toHaveLength(4);

  const firstItem = screen.getByText(/item1/i);
  expect(firstItem).toBeInTheDocument();
});

test('the callback gets called with the correct args (page#)', async () => {
  const mockFn = vi.fn();
  const user = userEvent.setup();

  render(<SetupNav callback={mockFn} navItems={mockNavItems} />);

  // Click item 2
  const navItem2 = await screen.findByText(/item2/);
  await user.click(navItem2);

  expect(mockFn).toHaveBeenCalledWith(1);

  // Click item 4
  const navItem4 = await screen.findByText(/item4/);
  await user.click(navItem4);

  expect(mockFn).toHaveBeenCalledWith(3);

  expect(mockFn).toHaveBeenCalledTimes(2);
});

test('The item for the current page has the primary color', async () => {
  render(
    <SetupNav callback={vi.fn()} navItems={mockNavItems} currentPage={2} />
  );

  const navItem3 = await screen.findByText(/item3/);
  expect(navItem3).toHaveStyle(`color: ${theme.colors.primaryShade1}`);
});
