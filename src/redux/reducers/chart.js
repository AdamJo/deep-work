import { UPDATE_WORK_DATE, TIME_FORMAT, CHART_VIEW, CLOSE_WORK_HOVER, OPEN_WORK_HOVER } from '../actions/types';

function Chart(state = {}, action) {
  switch (action.type) {
    case UPDATE_WORK_DATE:
      return {
        ...state,
        date: action.date,
        hours: action.hours,
      };
    case TIME_FORMAT:
      return {
        ...state,
        format: action.format,
      };
    case CHART_VIEW:
      return {
        ...state,
        viewType: action.view,
      };
    case OPEN_WORK_HOVER:
      return {
        ...state,
        workHover: true
      }
    case CLOSE_WORK_HOVER:
      return {
        ...state,
        workHover: false,
        date: action.date,
        hours: action.hours
      }
    default:
      return state;
  }
}

export default Chart;
