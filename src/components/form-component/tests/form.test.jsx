import userEvent from '@testing-library/user-event';
import Button from '../../button/button.component';
import FormInput from '../../form-input/form-input.component';
import Form from '../form.component';
import {
  render,
  screen,
} from '../../../utils/test-utils/testing-libraray.utils';

const inputs = [
  <FormInput
    type="password"
    label="Old password"
    required
    name="oldPass"
  ></FormInput>,
  <FormInput
    type="password"
    label="New password"
    required
    name="newPass"
  ></FormInput>,
  <FormInput
    type="password"
    label="Repeat new password"
    required
    name="confirmPass"
  ></FormInput>,
];

test('on submit, it sends the form fields', async () => {
  const user = userEvent.setup();
  const mockSubmit = vi.fn();
  render(
    <Form
      submitHandler={mockSubmit}
      button={<Button type="submit">Submit</Button>}
    >
      {inputs}
    </Form>
  );

  const oldPassInput = screen.getByRole('textbox', { name: 'Old password' });
  const newPassInput = screen.getByRole('textbox', { name: 'New password' });
  const repeatInput = screen.getByRole('textbox', {
    name: 'Repeat new password',
  });
  const button = screen.getByRole('button', { name: 'Submit' });

  await user.type(oldPassInput, 'aaaaaaaa');
  await user.type(newPassInput, 'ssssssss');
  await user.type(repeatInput, 'ssssssss');

  await user.click(button);

  expect(mockSubmit).toHaveBeenCalledWith({
    oldPass: 'aaaaaaaa',
    newPass: 'ssssssss',
    confirmPass: 'ssssssss',
  });
});
