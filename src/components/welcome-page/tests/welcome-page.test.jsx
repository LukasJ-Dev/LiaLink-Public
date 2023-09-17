import userEvent from '@testing-library/user-event';
import WelcomePage from '../welcome-page.component';
import {
  screen,
  render,
} from '../../../utils/test-utils/testing-libraray.utils';

test('clicking on the skip button brings you to the  jobs page', async () => {
  const user = userEvent.setup();
  render(<WelcomePage />);

  const laterButton = screen.getByRole('button', {
    name: 'labels.create_profile_later',
  });

  await user.click(laterButton);
  const logo = screen.getByRole('heading', { name: /lialink/i });
  expect(logo).toBeInTheDocument();
});

test('clicking on the skapa profil button fires setSignedUp with the right args', async () => {
  const user = userEvent.setup();
  const mockSetSignedUp = vi.fn();
  render(<WelcomePage setSignedUp={mockSetSignedUp} />);

  const button = screen.getByRole('button', { name: /labels.create_profile$/ });
  await user.click(button);

  expect(mockSetSignedUp).toHaveBeenCalled();
});
