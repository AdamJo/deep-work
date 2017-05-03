import HourFormat from '.';

const wrap = (props = {}) => shallow(<HourFormat {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ format: true });
});
