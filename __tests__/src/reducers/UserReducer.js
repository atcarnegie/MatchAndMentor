/* eslint-env jest */
import reducer from '../../../src/reducers/UserReducer'
import { UPDATE_NAME, UPDATE_MENTOR_ROLE, UPDATE_MENTEE_ROLE } from '../../../src/actions/types'

const INITIAL_STATE = {
  name: '',
  roles: null,
  mentorSelected: false,
  menteeSelected: false,
};

test('user reducer should return intial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
})

test('user reducer should handle UPDATE_NAME', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_NAME, payload: 'test' })).toEqual({
    ...INITIAL_STATE,
    name: 'test'
  })
})

test('user reducer should handle UPDATE_MENTOR_ROLE', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTOR_ROLE, payload: true })).toEqual({
    ...INITIAL_STATE,
    mentorSelected: true
  })
})

test('user reducer should handle UPDATE_MENTEE_ROLE', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTEE_ROLE, payload: true })).toEqual({
    ...INITIAL_STATE,
    menteeSelected: true
  })
})
