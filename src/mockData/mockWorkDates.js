const mockWorkDates = {
  'Mar 31 2017': {
    18: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 30 2017': {
    17: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 29 2017': {
    16: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 28 2017': {
    15: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 27 2017': {
    14: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 26 2017': {
    13: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 25 2017': {
    12: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 2,
    '9-5': 1,
    '12-5': 1,
    '13-5': 1
  },
  'Mar 24 2017': {
    11: 0,
    '8-5': 1,
    deep: 2,
    shallow: 0.5,
    12: 0,
    13: 0,
    14: 0
  },
  'Mar 23 2017': {},
  'Mar 22 2017': {
    9: 0,
    '8-5': 1,
    deep: 1,
    shallow: 1,
    10: 0,
    '10-5': 1
  },
  // deleted 23 and 24 for testing
  'Mar 19 2017': {
    6: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 18 2017': {
    5: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 17 2017': {
    4: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 16 2017': {
    3: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 15 2017': {
    2: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 14 2017': {
    1: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 13 2017': {
    9: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 12 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 10 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 9 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 8 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 7 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 6 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 5 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 4 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 3 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 2 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Mar 1 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 31 2017': {
    18: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 30 2017': {
    17: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 29 2017': {
    16: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 28 2017': {
    15: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 27 2017': {
    14: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 26 2017': {
    13: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 25 2017': {
    12: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 2,
    '9-5': 1,
    '12-5': 1,
    '13-5': 1
  },
  'Apr 24 2017': {
    11: 0,
    '8-5': 1,
    deep: 2,
    shallow: 0.5,
    12: 0,
    13: 0,
    14: 0
  },
  'Apr 23 2017': {},
  'Apr 22 2017': {
    9: 0,
    '8-5': 1,
    deep: 1,
    shallow: 1,
    10: 0,
    '10-5': 1
  },
  // deleted 23 and 24 for testing
  'Apr 19 2017': {
    6: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 18 2017': {
    5: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 17 2017': {
    4: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 16 2017': {
    3: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 15 2017': {
    2: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 14 2017': {
    1: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 13 2017': {
    9: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 12 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 10 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 9 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 8 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 7 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 6 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 5 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 4 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 3 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 2 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'Apr 1 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 31 2017': {
    18: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 30 2017': {
    17: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 29 2017': {
    16: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 28 2017': {
    15: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 27 2017': {
    14: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 26 2017': {
    13: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 25 2017': {
    12: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5,
    '9-5': 1,
    '12-5': 1,
    '13-5': 1
  },
  'May 24 2017': {
    11: 0,
    '8-5': 1,
    deep: 2,
    shallow: 0.5,
    12: 0,
    13: 0,
    14: 0
  },
  'May 23 2017': {},
  'May 22 2017': {
    9: 0,
    '8-5': 1,
    deep: 1,
    shallow: 1,
    10: 0,
    '10-5': 1
  },
  // deleted 23 and 24 for testing
  'May 19 2017': {
    6: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 18 2017': {
    5: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 17 2017': {
    4: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 16 2017': {
    3: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 15 2017': {
    2: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 14 2017': {
    1: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 13 2017': {
    9: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 12 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 11 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 10 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 9 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 8 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 7 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 6 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 5 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 4 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 3 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 2 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  },
  'May 1 2017': {
    8: 0,
    '8-5': 1,
    deep: 0.5,
    shallow: 0.5
  }
};
export default mockWorkDates;
