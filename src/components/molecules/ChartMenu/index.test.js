import ChartMenu from '.';
import { Button } from 'components';

const wrap = (props = { chart: { viewType: 'Day' } }) =>
  shallow(<ChartMenu {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' });
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
});

it('should contain buttons for day, week, month', () => {
  const wrapper = wrap();
  expect(wrapper.contains('Day')).toBe(true);
  expect(wrapper.contains('Week')).toBe(true);
  expect(wrapper.contains('Month')).toBe(true);
});
