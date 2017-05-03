import Charts from '.';

const wrap = (props = {}) => shallow(<Charts {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});

it('renders with different combination of props', () => {
  wrap({ chart: {} });
});