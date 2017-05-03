import Analyze from '.';

const wrap = (props = {}) => shallow(<Analyze {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ hours: {} });
  wrap({ hourRange: {} });
});