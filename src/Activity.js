class Activity {
  constructor (activityData, userID) {
    this.userID = userID;
    this.activityData = activityData.filter(function(obj) {
      return obj.userID === userID;
    });
  }
  
  stairClimbRecord () {
    let data = this.activityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs);
    return data[0].flightsOfStairs
  }

  avgMinsActive() {
    let data = this.activityData.reduce(function(acc, s) {
      acc.totalMinutesActive += s.minutesActive;
      acc.totalDays += 1;
      return acc;
    }, {totalMinutesActive: 0, totalDays: 0});
    return (data.totalMinutesActive / data.totalDays);
  }
  milesWalked () {
    let data = this.activityData.numSteps * this.userID.strideLength / 5288
    return data
  }


}





if (typeof module !== 'undefined') {
  module.exports = Activity;
}