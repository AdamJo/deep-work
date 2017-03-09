import React from 'react';
import styled from 'styled-components';
import { Button } from 'components';

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

const ChartMenu = props => {
  return (
    <Ul {...props}>
      {menuOptions.map((viewType, index) => (
        <Li key={index}>
          <Button active={props.chart.viewType === viewType ? true : false} onClick={() => props.chartView(viewType)} palette="secondary">
            {viewType}
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

ChartMenu.propTypes = {};

ChartMenu.defaultProps = {};

export default ChartMenu;
