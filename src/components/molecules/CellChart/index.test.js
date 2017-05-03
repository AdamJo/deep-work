import CellChart from '.';

const wrap = (props = {}) => shallow(<CellChart {...props} />);

it('renders', () => {
  wrap();
});


it('renders with different combination of props', () => {
  wrap({ hours: {} });
});