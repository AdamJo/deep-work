import { UPDATE_DAY, TIME_FORMAT, CHART_VIEW } from '../actions/types';

function Chart(state = [], action) {
  switch (action.type) {
    case UPDATE_DAY:
      return [
        ...state,
        {
          day: action.day,
          hours: action.hours,
        },
      ];
    case TIME_FORMAT:
      return [
        ...state,
        {
          format: action.format,
        },
      ];
    case CHART_VIEW:
      return [
        ...state,
        {
          viewType: action.view,
        },
      ];
    default:
      return state;
  }
}

export default Chart;
