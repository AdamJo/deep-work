import Analyze from '.';

const wrap = (props = {}) => shallow(<Analyze {...props} />);

it('renders', () => {
  wrap();
});
