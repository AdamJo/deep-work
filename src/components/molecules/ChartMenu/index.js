import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button, TimeFormat } from 'components';
import shortid from 'shortid';

const menuOptions = ['day', 'week', 'month'];

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 30em){
    
    justify-content: center;
    li {
      text-align: center;
      flex-basis: 40%;
      margin: 10px 0;

    }
  }
  // min-width: 400px;
`;

const Li = styled.li`
`;

const ChartMenu = (
  {
    chartView,
    viewType,
    ...props
  },
) => {
  return (
    <Ul {...props}>
      {menuOptions.map((view, index) => (
        <Li key={shortid.generate()}>
          <Button
            active={viewType === view ? true : false}
            onClick={() => chartView(view)}
            palette="secondary"
          >
            {view}
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

ChartMenu.propTypes = {
  chartView: PropTypes.func,
  viewType: PropTypes.string,
};

ChartMenu.defaultProps = {};

export default ChartMenu;
