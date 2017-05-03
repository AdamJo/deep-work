import AtomTemplate from '.';

const wrap = (props = {}) => shallow(<AtomTemplate {...props} />);

it('renders', () => {
  wrap();
});
