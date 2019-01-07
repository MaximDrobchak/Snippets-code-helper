const previousState = { a: "b" };
const action = {
  type: "DO_SOMETHING",
  payload
};

const newState = someReducer(previousState, action);
const expectedNewState = { a: "b" };

expect(newState).to.equal(expectedNewState);
