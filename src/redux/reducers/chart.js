import {
  UPDATE_WORK_DATE,
  UPDATE_TIME_FORMAT,
  CHART_VIEW,
  CLOSE_WORK_HOVER,
  OPEN_WORK_HOVER,
  WORK_HOUR_RANGE,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
} from '../actions/types';

function Chart(state = {}, action) {
  switch (action.type) {
    case UPDATE_WORK_DATE:
      return {
        ...state,
        date: action.date,
        hours: action.hours,
      };
    case UPDATE_TIME_FORMAT:
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
        workHover: true,
      };
    case CLOSE_WORK_HOVER:
      return {
        ...state,
        workHover: false,
      };
    case WORK_HOUR_RANGE:
      return {
        ...state,
        hourRange: {
          min: action.hourRange.min,
          max: action.hourRange.max,
        },
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...action.userData,
      };
    case GET_USER_INFO_FAILURE:
      return state;
    default:
      return state;
  }
}

export default Chart;
