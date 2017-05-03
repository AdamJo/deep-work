import DateRangeWrapper from '.';

const wrap = (props = {}) => shallow(<DateRangeWrapper {...props} />);

it('renders', () => {
  wrap();
});
