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
    activity = new Activity(activityData, userData);
  })

  it('it should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  it('it should be an instance of activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  })

  it('it should have a unique ID', () => {
    expect(activity.userData[0].id).to.equal(1);
  })

  it('it should have a date', () => {
    expect(activity.activityData[0].date).to.equal("2019/06/15");
  })

  it('it should know the stair climbing record', () =>{
    expect(activity.stairClimbRecord()).to.equal(37)
  })

  it('it should know average minutes active for the week', () => {
    expect(activity.avgMinsActive('2019/06/15')).to.equal(132)
  })

  it('it should filter the date', () => {
    expect(activity.activityDate('2019/06/15')).to.deep.equal([
      {
        userID: 10,
        date: '2019/06/15',
        numSteps: 8015,
        minutesActive: 106,
        flightsOfStairs: 37
      },
      {
        userID: 3,
        date: '2019/06/15',
        numSteps: 7402,
        minutesActive: 116,
        flightsOfStairs: 33
      },
      {
        userID: 9,
        date: '2019/06/15',
        numSteps: 6389,
        minutesActive: 41,
        flightsOfStairs: 33
      },
      {
        userID: 4,
        date: '2019/06/15',
        numSteps: 3486,
        minutesActive: 114,
        flightsOfStairs: 32
      },
      {
        userID: 8,
        date: '2019/06/15',
        numSteps: 10333,
        minutesActive: 114,
        flightsOfStairs: 31
      },
      {
        userID: 11,
        date: '2019/06/15',
        numSteps: 11652,
        minutesActive: 20,
        flightsOfStairs: 24
      },
      {
        userID: 6,
        date: '2019/06/15',
        numSteps: 14810,
        minutesActive: 287,
        flightsOfStairs: 18
      },
      {
        userID: 1,
        date: '2019/06/15',
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
      },
      {
        userID: 5,
        date: '2019/06/15',
        numSteps: 11374,
        minutesActive: 213,
        flightsOfStairs: 13
      },
      {
        userID: 2,
        date: '2019/06/15',
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10
      },
      {
        userID: 7,
        date: '2019/06/15',
        numSteps: 2634,
        minutesActive: 107,
        flightsOfStairs: 5
      },
      {
        userID: 12,
        date: '2019/06/15',
        numSteps: 9256,
        minutesActive: 108,
        flightsOfStairs: 2
      }
    ])
  })

  it('it should be able to determine miles walked', () => {
    expect(activity.milesWalked('2019/06/15', 1)).to.equal(3)
  })

  it('it should show mins active for a date', () =>{
    expect(activity.activeMins('2019/06/15', 1)).to.equal(140)
  })

  it('it should know if user reached step goal', () => {
    expect(activity.stepGoal('2019/06/15', 1)).to.equal("You almost made it!")
  })

  it('should find all days where user exceeded step goal', () => {
    expect(activity.daysStepGoal(userData[0])).to.deep.equal([ '2019/06/17' ])
  })


})