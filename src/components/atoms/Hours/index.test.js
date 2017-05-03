import Hours from '.';

const wrap = (props = {}) => shallow(<Hours {...props} />);

it('renders', () => {
  wrap();
});
