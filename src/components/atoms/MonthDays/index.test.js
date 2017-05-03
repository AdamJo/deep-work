import MonthDays from '.';

const wrap = (props = {}) => shallow(<MonthDays {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ deepPercentage: 1 });
  wrap({ shallowPercentage: 2 });
});