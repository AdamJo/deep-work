import MonthChart from '.';

const wrap = (props = {}) => shallow(<MonthChart {...props} />);

it('renders', () => {
  wrap();
});
