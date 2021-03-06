import {
  UPDATE_WORK_DATE,
  UPDATE_TIME_FORMAT,
  CHART_VIEW,
  CLOSE_WORK_HOVER,
  OPEN_WORK_HOVER,
  WORK_HOUR_RANGE,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  TOGGLE_MENU,
  ADD_DAY,
  SUBTRACT_DAY,
  ADD_WEEK,
  SUBTRACT_WEEK,
  ADD_MONTH,
  SUBTRACT_MONTH,
  SWITCH_TO_DATE,
} from '../actions/types';

function Chart(state = {}, action) {
  switch (action.type) {
    case UPDATE_WORK_DATE:
      const dates = Object.assign({}, state.workDates);
      let deep = 0;
      let shallow = 0;
      Object.entries(action.hours).forEach(([key, value]) => {
        if (key !== 'deep' && key !== 'shallow') {
          if (value === 0) {
            deep += 0.5;
          }
          if (value === 1) {
            shallow += 0.5;
          }
        }
      });
      dates[action.date] = { ...action.hours, deep, shallow };
      return {
        ...state,
        workDates: dates,
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
    case TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu,
      };
    case ADD_DAY:
      action.day.setDate(action.day.getDate() + 1);
      return {
        ...state,
        daySelected: action.day,
      };
    case SUBTRACT_DAY:
      action.day.setDate(action.day.getDate() - 1);
      return {
        ...state,
        daySelected: action.day,
      };
    case ADD_WEEK:
      action.week.first.setDate(action.week.first.getDate() + 7);
      action.week.last.setDate(action.week.last.getDate() + 7);
      return {
        ...state,
        weekSelected: action.week,
      };
    case SUBTRACT_WEEK:
      action.week.first.setDate(action.week.first.getDate() - 7);
      action.week.last.setDate(action.week.last.getDate() - 7);
      return {
        ...state,
        weekSelected: action.week,
      };
    case ADD_MONTH:
      return {
        ...state,
        monthSelected: {
          first: new Date(action.day.getFullYear(), action.day.getMonth() + 1),
          last: new Date(
            action.day.getFullYear(),
            action.day.getMonth() + 2,
            0,
          ),
        },
      };
    case SUBTRACT_MONTH:
      return {
        ...state,
        monthSelected: {
          first: new Date(action.day.getFullYear(), action.day.getMonth() - 1),
          last: new Date(action.day.getFullYear(), action.day.getMonth(), 0),
        },
      };
    case SWITCH_TO_DATE:
      return {
        ...state,
        viewType: 'Day',
        daySelected: action.date,
      };
    default:
      return state;
  }
}

export default Chart;
