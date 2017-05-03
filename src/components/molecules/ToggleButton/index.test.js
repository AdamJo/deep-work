import ToggleButton from '.';

const wrap = (props = {}) => shallow(<ToggleButton {...props} />);

it('renders', () => {
  wrap();
});
