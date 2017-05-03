import DateWrapper from '.';

const wrap = (props = {}) => shallow(<DateWrapper {...props} />);

it('renders', () => {
  wrap();
});
