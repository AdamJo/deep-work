import TotalHours from '.';

const wrap = (props = {}) => shallow(<TotalHours {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ deep: true });
});

it('should contain text when passed children', () => {
  const wrapper = shallow(<TotalHours>Hello</TotalHours>);
  expect(wrapper.text('Hello')).toBe('Hello');
});
