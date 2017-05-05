import Slider from '.';
import Range from 'rc-slider/lib/Range';

const wrap = (props = {}) => shallow(<Slider {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ hourRange: {} });
});
