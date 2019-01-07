import deepFreeze from "deep-freeze";

const previousState = { a: "b" };
const action = {
  type: "DO_SOMETHING",
  payload
};

deepFreeze(previousState);

const newState = someReducer(previousState, action);
const expectedNewState = { a: "b" };

expect(newState).to.equal(expectedNewState);
