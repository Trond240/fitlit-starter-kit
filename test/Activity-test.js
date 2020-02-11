const chai = require("chai");
const expect = chai.expect;

const Activity = require('../src/Activity');
const activityData = require('../data/Activity-test-data.js');
const User = require('../src/User');
const userData = require('../data/user-test-data');

let activity;
let user;

describe('Activity default properties', () => {

  beforeEach(() => {
    user = new User(userData[0]);
    activity = new Activity(activityData, user.id);
  })

  it('it should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  it('it should be an instance of activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  })

  it('it should have a unique ID', () => {
    expect(activity.userID).to.equal(1);
  })

  it('it should have a date', () => {
    expect(activity.activityData[0].date).to.equal("2019/06/15");
  })

  it('it should know the stair climbing record', () =>{
    expect(activity.stairClimbRecord()).to.equal(36)
  })

  it('it should know average minutes active for the week', () => {
    expect(activity.avgMinsActive()).to.equal(161)
  })

  it('it should be able to determine miles walked', () => {
    expect(activity.milesWalked()).to.equal('2.91')
  })

})