class Activity {
  constructor (activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  stairClimbRecord () {
    let data = this.activityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs);
    return data[0].flightsOfStairs
  }

  avgMinsActive(weekStart) {
    weekStart = new Date(weekStart);
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.activityData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });
    let userActivity = this.activityData.reduce(function(acc, s) {
      acc.totalMinutesActive += s.minutesActive;
      acc.totalDays += 1;
      return acc;
    }, {totalMinutesActive: 0, totalDays: 0});
    return Math.round(userActivity.totalMinutesActive / userActivity.totalDays);
  }

  activityDate (date) {
    let filterDate = this.activityData.filter(steps => {
      return steps.date === date;
    })
    return filterDate
  }

  milesWalked(date, id) {
    let activityDates = this.activityDate(date);
    let foundUser = activityDates.find(userDate => {
      return userDate.userID === id.id
    })
    return Math.round(this.userData.strideLength * foundUser.numSteps / 5280)
  }

  activeMins (date, id) {
    let activityDates = this.activityDate(date);
    let foundUser = activityDates.find(userDate => {
      return userDate.userID === id.id
    })
    return Math.round(foundUser.minutesActive)
  }

  stepGoal (date, id) {
    let activityDates = this.activityDate(date);
    let foundUser = activityDates.find(userDate => {
      return userDate.userID === id.id
    })
    if (foundUser.numSteps >= this.userData.dailyStepGoal) {
      return "Way to walk!"
    } else {
      return "You almost made it!"
    }
  }

  daysStepGoal (userIn) {
      let foundActivity = this.activityData.filter(user => userIn.id === user.userID);
        if (foundActivity[0].numSteps > userIn.dailyStepGoal) {
      return foundActivity[0].date
    }
  }

  // For a user, find all the days where they
  // exceeded their step goal

  addDays(date, daysToAdd) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }
}



if (typeof module !== 'undefined') {
  module.exports = Activity;
}
