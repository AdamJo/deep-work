import WeekDays from '.';

const wrap = (props = {}) => shallow(<WeekDays {...props} />);

it('renders', () => {
  wrap();
});

it('renders with different combination of props', () => {
  wrap({ type: 'deep' });
});


it('should contain text when passed children', () => {
  const wrapper = shallow(<WeekDays>Hello</WeekDays>);
  expect(wrapper.text('Hello')).toBe('Hello');
});