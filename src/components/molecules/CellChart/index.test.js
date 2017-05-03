import CellChart from '.';

const wrap = (props = {}) => shallow(<CellChart {...props} />);

it('renders', () => {
  wrap();
});
