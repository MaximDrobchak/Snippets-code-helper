// whereas the payload is optional
const state = { a: "b" };
const payload = { a: "b" };

const substate = getSomething(state, payload);
const expectedSubstate = { a: "b" };

expect(substate).to.equal(expectedSubstate);
