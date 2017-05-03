import WeekChart from '.';

const wrap = (props = {}) => shallow(<WeekChart {...props} />);

it('renders', () => {
  wrap();
});
