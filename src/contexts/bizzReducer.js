import {
  setQuestions,
  setCheckedKeyToOptions,
  checkSelectedOption,
  setHasVoted,
  setLocation,
} from "./bizzActions"

import {
  SET_QUESTIONS,
  SET_CHECKED_KEY_TO_OPTIONS,
  CHECK_SELECTED_OPTION,
  SET_HAS_VOTED,
  SET_LOCATION,
} from "./bizzTypes"

const bizzReducer = (state, action) => {
  const { payload } = action
  switch (action.type) {
    case SET_QUESTIONS:
      return setQuestions(payload, state)

    case SET_CHECKED_KEY_TO_OPTIONS:
      return setCheckedKeyToOptions(payload, state)

    case CHECK_SELECTED_OPTION:
      return checkSelectedOption(
        payload.questionItems,
        payload.questionId,
        payload.optionId,
        state
      )
    case SET_HAS_VOTED:
      return setHasVoted(payload, state)

    case SET_LOCATION:
      return setLocation(payload, state)
    default:
      return state
  }
}

export default bizzReducer
