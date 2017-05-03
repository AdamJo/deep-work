import Hours from '.';

const wrap = (props = {}) => shallow(<Hours {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ format: '12' });
  wrap({ time: 12 });
});