import MonthDays from '.';

const wrap = (props = {}) => shallow(<MonthDays {...props} />);

it('renders', () => {
  wrap();
});
