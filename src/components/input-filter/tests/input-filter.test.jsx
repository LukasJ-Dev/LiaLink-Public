import InputFilter from '../input-filter.component';
import {
  render,
  screen,
} from '../../../utils/test-utils/testing-libraray.utils';
import userEvent from '@testing-library/user-event';

const mockList = [
  'Barbera',
  'Dolcetto',
  'Chianti',
  'Barolo',
  'Montepulciano',
  'Amarone',
  'Etna Rosso',
  'Brunello di Montalcino',
  'Primitivo',
  'Sagrantino',
  'Negroamaro',
  'Barbaresco',
  "Nero d'Avola",
];

test('button label renders correctly', () => {
  render(<InputFilter buttonLabel="filter" />);

  const button = screen.getByRole('button', { name: /filter/ });
  expect(button).toBeInTheDocument();
});

test('entering text filters properly', async () => {
  const user = userEvent.setup();
  render(<InputFilter label="skills" list={mockList} />);

  const input = screen.getByLabelText('skills');
  await user.type(input, 'pri');

  const items = screen.getAllByRole('option');

  expect(items).toHaveLength(1);

  await user.clear(input);
  await user.type(input, 'ne');

  const items2 = screen.getAllByRole('option');
  expect(items2).toHaveLength(4);

  await user.clear(input);
  await user.type(input, 'pinot grigio');

  const items3 = screen.queryAllByRole('option');
  expect(items3).toHaveLength(0);
});

test('clicking on a list item enters it in the input', async () => {
  const user = userEvent.setup();
  render(<InputFilter label="skills" list={mockList} />);

  const input = screen.getByLabelText('skills');
  expect(input).toHaveValue('');

  await user.type(input, 'pri');
  const item = screen.getByRole('option', { value: /primitivo/i });

  await user.click(item);
  expect(input).toHaveValue('Primitivo');
});

test('opening the list renders the overly and clicking on the overlay closes the list', async () => {
  const user = userEvent.setup();
  render(<InputFilter label="skills" list={mockList} />);

  const input = screen.getByLabelText('skills');

  await user.type(input, 'pri');
  const list = screen.getByTestId('options-box');
  expect(list).toBeInTheDocument();

  const overlay = screen.getByTestId('overlay');
  expect(overlay).toBeInTheDocument();

  await user.click(overlay);
  expect(overlay).not.toBeInTheDocument();
  expect(list).not.toBeInTheDocument();
});

test('clicking the button fires the calllback with the input"s value', async () => {
  const mockCallback = vi.fn();
  const user = userEvent.setup();
  render(
    <InputFilter
      callback={mockCallback}
      buttonLabel="filter"
      label="skills"
      list={mockList}
    />
  );

  const input = screen.getByLabelText('skills');
  const button = screen.getByRole('button', { name: /filter/i });

  await user.type(input, 'Pinot Noir');
  await user.click(button);

  expect(mockCallback).toHaveBeenCalledWith('Pinot Noir');
});
