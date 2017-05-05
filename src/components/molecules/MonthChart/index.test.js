import MonthChart from '.';

const wrap = (props = {}) => shallow(<MonthChart {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ workDates: {} });
  wrap({ monthSelected: { first: new Date() } });
});
