import WeekChart from '.';

const wrap = (props = {}) => shallow(<WeekChart {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ workDates: {} });
  wrap({ weekSelected: { first: new Date() } });
});
