import Modal from '.';

const wrap = (props = {}) => shallow(<Modal {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ workDates: {} });
  wrap({ chart: {} });
  wrap({ currentUser: {} });
});
