import {
  render,
  screen,
} from '../../../utils/test-utils/testing-libraray.utils';
import SetUp from '../set-up.component';

test('the confirm pop-up is shown when the user clicks on the back button and it goes away when the user clicks cancel', async () => {
  const { user } = render(<SetUp />);

  const skapaButton = screen.getByRole('button', {
    name: /labels.create_profile$/i,
  });

  await user.click(skapaButton);
  const backButton = screen.getByRole('button', { name: /go back/i });

  await user.click(backButton);

  const confirmPopup = screen.getByTestId('confirm-popup');

  expect(confirmPopup).toHaveStyle(
    'animation: slideDown 0.5s ease-in-out forwards;'
  );

  const cancelButton = screen.getByRole('button', { name: /cancel/i });

  await user.click(cancelButton);
  expect(confirmPopup).toHaveStyle(
    'animation: slideUp 0.5s ease-in-out forwards;'
  );
});
