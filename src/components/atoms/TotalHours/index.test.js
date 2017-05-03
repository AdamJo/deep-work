import TotalHours from '.';

const wrap = (props = {}) => shallow(<TotalHours {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ deep: true });
});