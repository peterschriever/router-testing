import {
  FETCH_USER,
  FETCH_DEADLINES,
  NEW_DEADLINES,
  CHANGE_APP_MODE,
  CHANGE_CAL_TYPE,
  CAL_NEXT,
  CAL_PREV,
  UPDATE_DEADLINES,
  LOAD_MORE_CARDS
} from './types';
import moment from 'moment';

export function fetchUser(user) {
    // @TODO: call backend API to fetch current user
    return {
        type: FETCH_USER,
        payload: {
            loggedIn: true,
            fullName: 'Mark Otto'
        }
    };
}

export function searchDeadlines(user, filter, search) {
    // @TODO: call backend api to fetch deadline cards
    // using the current user, and applied filter(s)
    return {
        type: NEW_DEADLINES,
        payload: {
            deadlines: [
                {
                    title: 'Searched for Panel',
                    content: 'Search result panel content',
                    labels: ['Asdasdasd', '2 EC'],
                    color: null,
                    date: new Date(),
                    checklist: [
                        {option: 'Option 1', checked: true},
                        {option: 'Option 2', checked: false},
                        {option: 'Option 3', checked: false},
                        {option: 'Option 4', checked: true}
                    ]
                },
            ]
        }
    };
}

export function fetchDeadlines(user, filter) {
    // @TODO: call backend api to fetch deadline cards
    // using the current user, and applied filter(s)
    return {
      type: FETCH_DEADLINES,
      payload: [
        {
          id: 65,
          title: 'Panel 1',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'cyan',
          startDate: moment().toDate(),
          endDate: moment().add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 43,
          title: 'Panel 2',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().toDate(),
          endDate: moment().add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 23,
          title: 'Panel 3',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().subtract(2, 'day').toDate(),
          endDate: moment().subtract(2, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 2,
          title: 'Panel 4',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'cyan',
          startDate: moment().subtract(1, 'day').toDate(),
          endDate: moment().subtract(1, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 123,
          title: 'Panel 5',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().add(3, 'day').toDate(),
          endDate: moment().add(3, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },{
          id: 11,
          title: 'Panel 5',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().add(2, 'day').toDate(),
          endDate: moment().add(2, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        }
      ]
    };
}

export function loadMoreCards() {
    return {
      type: LOAD_MORE_CARDS,
      payload: [
        {
          id: 1,
          title: 'Panel 1',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'cyan',
          startDate: moment().toDate(),
          endDate: moment().add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 2,
          title: 'Panel 2',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().toDate(),
          endDate: moment().add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 3,
          title: 'Panel 3',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().subtract(2, 'day').toDate(),
          endDate: moment().subtract(2, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 4,
          title: 'Panel 4',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'cyan',
          startDate: moment().subtract(1, 'day').toDate(),
          endDate: moment().subtract(1, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },
        {
          id: 5,
          title: 'Panel 5',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().add(3, 'day').toDate(),
          endDate: moment().add(3, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        },{
          id: 6,
          title: 'Panel 5',
          content: 'Panel content',
          labels: [
            { name: 'Communicatie', style: { color: '#FFF', background: '#FF0000' } },
            { name: '2 EC', style: { color: '#222', background: '#00FF00' } },
          ],
          color: 'pink',
          startDate: moment().add(2, 'day').toDate(),
          endDate: moment().add(2, 'day').add(1, 'hour').toDate(),
          checklist: [
            { option: 'Option 1', checked: false },
            { option: 'Option 2', checked: true },
            { option: 'Option 3', checked: false },
            { option: 'Option 4', checked: true }
          ]
        }
      ]
    }
}

export function changeCalendarType(newType) {
  return {
    type: CHANGE_CAL_TYPE,
    payload: newType
  }
}

export function changeAppMode(newMode) {
  return {
    type: CHANGE_APP_MODE,
    payload: newMode
  }
}

export function calendarNext(calendarType) {
  console.log("Todo: backend call for calendarNext; retrieve next set of data depending on calendarType");
  return {
    type: CAL_NEXT,
    payload: {}
  }
}

export function calendarPrev(calendarType) {
  console.log("Todo: backend call for calendarPrev; retrieve prev set of data depending on calendarType");
  return {
    type: CAL_PREV,
    payload: {}
  }
}

export function updateDeadlineOption(checked, text) {
    console.log("UPDATE call:",checked,text);
    // TODO: backend call
    return {
        type: UPDATE_DEADLINES,
        payload: {
            deadlines: [
                {
                    title: 'Panel 4',
                    content: 'Panel UPDATEDTEST',
                    labels: [
                        {name: 'Communicatie', style: {color: '#FFF', background: '#FF0000'}},
                        {name: '2 EC', style: {color: '#222', background: '#00FF00'}},
                    ],
                    color: 'cyan',
                    date: new Date(),
                    checklist: [
                        {option: 'Option 1', checked: false},
                        {option: 'Option 2', checked: true},
                        {option: 'Option 3', checked: false},
                        {option: 'Option 4', checked: true}
                    ]
                }
            ]
        }
    }
}
