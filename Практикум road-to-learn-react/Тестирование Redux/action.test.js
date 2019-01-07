// whereas the payload is optional
const payload = { a: [] };

const action = doSomething(payload);
const expectedAction = {
  type: "DO_SOMETHING",
  payload
};

expect(action).to.equal(expectedAction);
