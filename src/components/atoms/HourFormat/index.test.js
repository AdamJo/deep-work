import HourFormat from '.';

const wrap = (props = {}) => shallow(<HourFormat {...props} />);

it('renders', () => {
  wrap();
});
