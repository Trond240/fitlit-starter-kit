class Activity {
  constructor (activityData, userID) {
    this.userID = userID;
    this.activityData = activityData.filter(function(obj) {
      return obj.userID === userID;
    });
  }
  
  stairClimbRecord () {
    let data = this.activityData.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs);
    console.log(data[0].flightsOfStairs)
    return data[0].flightsOfStairs
  }



}






if (typeof module !== 'undefined') {
  module.exports = Activity;
}