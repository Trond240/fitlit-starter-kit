class Activity {
  constructor (activityData, userData) {
    this.userData = userData;
    this.activityData = activityData;
  }
  
  stairClimbRecord () {
    let data = this.activityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs);
    return data[0].flightsOfStairs
  }

  avgMinsActive(weekStart) {
    weekStart = new Date(weekStart);
    // Inclusive date range so only add 6 to get a 7 day period
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

  milesWalked (date, id) {
    let activityDates = this.activityDate(date);
    let foundUser = activityDates.find(userDate => {
      return userDate.userID === id
    })
    return Math.round(this.userData[0].strideLength * foundUser.numSteps / 5280)
  }

  addDays(date, daysToAdd) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }

}




if (typeof module !== 'undefined') {
  module.exports = Activity;
}