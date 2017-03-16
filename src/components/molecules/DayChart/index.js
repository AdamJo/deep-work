import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

import { CellButton, HoverWork, Hours } from 'components';

// no package and verbose = [...Array(24).keys()];
// adding lodash Range adds an extra 70kb
const time = [...Array(24).keys()].map(data => `${data + 1} `);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justifyContent: center;
  flex-wrap: wrap;
  text-align: center;
  user-select: none;
`;

const DayWrapper = styled.div`
  display: flex;
  margin: 0 5px;
`;

function renderTimeLine(format, hour) {
  if (format === '12') {
    if (hour > 12) {
      return hour - 12;
    } else {
      return hour;
    }
  } else {
    return hour;
  }
}

function deepOrShallow(index) {
  switch (index) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 0;
  }
}

function calcTime(index, hours) {
  hours[index] = deepOrShallow(hours[index]);
  return hours;
}

function renderTimeFrame(index) {
  return;
}

const DayChart = class DayChart extends PureComponent {
  render() {
    return (
      <div>
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
                  <DayWrapper>
                    <CellButton
                      hourType={this.props.chart.hours[index * 2]}
                      onMouseDown={() =>
                        this.props.updateWorkDate(
                          calcTime(index * 2, this.props.chart.hours),
                          this.props.chart.date,
                        )}
                      onMouseEnter={
                        this.props.chart.workHover
                          ? () =>
                              this.props.updateWorkDate(
                                calcTime(index * 2, this.props.chart.hours),
                                this.props.chart.date,
                              )
                          : ''
                      }
                    />
                    &nbsp;
                    <CellButton
                      hourType={this.props.chart.hours[index * 2 + 1]}
                      onMouseDown={() =>
                        this.props.updateWorkDate(
                          calcTime(index * 2 + 1, this.props.chart.hours),
                          this.props.chart.date,
                        )}
                      onMouseEnter={
                        this.props.chart.workHover
                          ? () =>
                              this.props.updateWorkDate(
                                calcTime(index * 2 + 1, this.props.chart.hours),
                                this.props.chart.date,
                              )
                          : ''
                      }
                    />
                  </DayWrapper>
                </div>
              );
          })}
        </Wrapper>
      </div>
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
