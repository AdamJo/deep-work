import ChartMenu from '.';
import { Button } from 'components';

const wrap = (props = { chart: { viewType: 'day' } }) =>
  shallow(<ChartMenu {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});

it('should contain buttons for day, week, month', () => {
  const wrapper = wrap();
  expect(wrapper.contains('day')).toBe(true);
  expect(wrapper.contains('week')).toBe(true);
  expect(wrapper.contains('month')).toBe(true);
});