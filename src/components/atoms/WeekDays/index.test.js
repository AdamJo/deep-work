import WeekDays from '.';

const wrap = (props = {}) => shallow(<WeekDays {...props} />);

it('renders', () => {
  wrap();
});
