import userEvent from '@testing-library/user-event';
import {
  screen,
  render,
} from '../../../utils/test-utils/testing-libraray.utils';
import FormInput from '../form-input.component';

const mockProfileData = {
  name: 'Sarah Marshall',
};

test('if there is a previous value, it is set in the field', async () => {
  render(<FormInput data={mockProfileData} name="name" />);

  const input = await screen.findByRole('textbox');
  expect(input).toHaveValue('Sarah Marshall');
});

test('The label shrinks and transforms when there is text in the input and goes back when it is empty', async () => {
  const user = userEvent.setup();

  render(<FormInput label="Enter your name:" />);

  const label = screen.getByText(/Enter your name:/i);
  const input = screen.getByLabelText(/Enter your name:/i);

  expect(label).toHaveStyle('font-size: 1.8rem;');

  await user.type(input, 'Sarah');

  expect(label).toHaveStyle('font-size: 1.6rem;');

  await user.clear(input);
  expect(label).toHaveStyle('font-size: 1.8rem;');
});

test('if the type is "textarea", a textarea element is rendered with a height of 20rem', () => {
  render(<FormInput type="textarea" label="textarea" />);

  const textarea = screen.getByLabelText('textarea');
  expect(textarea).toHaveStyle('height: 20rem;');
});

test('if you click on the eye, the type changes from password to text', async () => {
  const user = userEvent.setup();

  render(<FormInput label="Enter your password:" type="password" />);

  const input = screen.getByLabelText(/Enter your password:/i);

  const eyeOpen = screen.queryByRole('button', { name: /Hide password/i });
  expect(eyeOpen).not.toBeInTheDocument();

  const eyeClosed = screen.getByRole('button', { name: /Show password/i });
  expect(input).toHaveAttribute('type', 'password');
  expect(eyeClosed).toBeInTheDocument();

  await user.click(eyeClosed);

  const eyeOpen1 = screen.getByRole('button', { name: /Hide password/i });
  expect(eyeOpen1).toBeInTheDocument();
  expect(eyeClosed).not.toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
});

test('the callback fires when the value changes on a select input', async () => {
  const user = userEvent.setup();
  const mockCallback = vi.fn();
  render(<FormInput type="select" select={true} callback={mockCallback} />);

  const input = screen.getByRole('listbox');
  await user.type(input, 'Sarah');
  expect(mockCallback).toHaveBeenCalledTimes(5);
  expect(mockCallback).toHaveBeenLastCalledWith('Sarah');
  expect(mockCallback).toHaveBeenCalledWith('S');
});
