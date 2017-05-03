import TimeFormat from '.';

const wrap = (props = {}) => shallow(<TimeFormat {...props} />);

it('renders', () => {
  wrap();
});
