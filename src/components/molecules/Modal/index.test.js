import Modal from '.';

const wrap = (props = {}) => shallow(<Modal {...props} />);

it('renders', () => {
  wrap();
});
