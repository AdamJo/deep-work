import Button from '.';

const wrap = (props = {}) => shallow(<Button {...props} />);

it('renders children when passed in', () => {
  const wrapper = wrap({ children: 'test' });
  expect(wrapper.contains('test')).toBe(true);
});

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});

it('renders with different combination of props', () => {
  wrap({ active: true });
  wrap({ cycle: true });
});