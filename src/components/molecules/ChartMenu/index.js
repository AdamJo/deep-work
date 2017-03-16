import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button, TimeFormat } from 'components';

// determines state of chart;

const menuOptions = ['day', 'week', 'month', 'year'];

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  min-width: 200px;
`;

const Li = styled.li`
`;

const ChartMenu = (
  {
    chartView,
    chart,
    updateTimeFormat,
    ...props
  },
) => {
  return (
    <Ul {...props}>
      {menuOptions.map((viewType, index) => (
        <Li key={index}>
          <Button
            active={chart.viewType === viewType ? true : false}
            onClick={() => chartView(viewType)}
            palette="secondary"
          >
            {viewType}
          </Button>
        </Li>
      ))}
      <li>
        <TimeFormat
          updateTimeFormat={updateTimeFormat}
          format={chart.format === '12' ? true : false}
        />
      </li>
    </Ul>
  );
};

ChartMenu.propTypes = {
  chartView: PropTypes.func,
  timeFormat: PropTypes.func,
  chart: PropTypes.object,
};

ChartMenu.defaultProps = {
  chart: { viewType: 'day', format: '12' },
};

export default ChartMenu;
