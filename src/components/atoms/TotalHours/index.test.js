import TotalHours from '.';

const wrap = (props = {}) => shallow(<TotalHours {...props} />);

it('renders', () => {
  wrap();
});
