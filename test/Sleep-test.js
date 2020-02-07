const chai = require("chai");
const expect = chai.expect;

const Sleep = require('../src/Hydration');
const sleepData = require('../data/Sleep-test-data.js');
const User = require('../src/User');
const userData = require('../data/user-test-data');

let sleep;
let user;

describe('Sleep default properties', () => {

  beforeEach(() => {
    user = new User(userData[0]);
    sleep = new Sleep(sleepData, user.ID);
  })
  it('it should be a function', () => {
    expect(Sleep).to.be.a('function');
  })
  it('it should be an instance of hydration', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  })

})