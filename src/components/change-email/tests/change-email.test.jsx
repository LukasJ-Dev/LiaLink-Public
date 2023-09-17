import {
  render,
  screen,
} from '../../../utils/test-utils/testing-libraray.utils';
import ChangeEmail from '../change-email.component';
import '../../../store/features/user/user.slice';

test('the inputs and button are rendered', () => {
  render(<ChangeEmail />);

  const inputs = screen.getAllByRole('textbox');
  expect(inputs).toHaveLength(3);
});
