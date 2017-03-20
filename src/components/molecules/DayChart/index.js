import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

import { CellButton, Hours, CellChart } from 'components';

// no package and verbose = [...Array(24).keys()];
// adding lodash Range adds an extra 70kb
const time = [...Array(24).keys()].map(data => `${data + 1} `);

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// todo: figuire out why I need this
// this outer wrapper seems to only work with a style component attatched
const OuterWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  user-select: none;
  max-width: 600px;
  }
`;

const DayChart = class DayChart extends PureComponent {
  render() {
    return (
      <OuterWrapper style={OuterWrapperStyle}>
        <Wrapper
          {...this.props}
          onMouseDown={() => this.props.openWorkHover()}
          onMouseUp={() => this.props.closeWorkHover()}
        >
          {time.map((hour, index) => {
            if (
              index <= this.props.hourRange.max &&
              index >= this.props.hourRange.min - 1
            )
              return (
                <div key={index}>
                  <Hours timeFormat={this.props.chart.format} hour={hour} />
                  <CellChart
                    index={index}
                    hours={this.props.chart.hours}
                    updateWorkDate={this.props.updateWorkDate}
                    workHover={this.props.chart.workHover}
                    date={this.props.chart.date}
                  />
                </div>
              );
          })}
        </Wrapper>
      </OuterWrapper>
    );
  }
};

DayChart.propTypes = {
  chart: PropTypes.object,
  updateWorkDate: PropTypes.func,
  closeWorkHover: PropTypes.func,
  openWorkHover: PropTypes.func,
  hourRange: PropTypes.object,
};

DayChart.defaultProps = {
  chart: { format: '12', date: 'Thu Mar 09 2017', hours: [0] },
  hourRange: { min: 1, max: 24 },
};

export default DayChart;
