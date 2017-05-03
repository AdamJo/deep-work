import WeekDays from '.';

const wrap = (props = {}) => shallow(<WeekDays {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ type: 'deep' });
});