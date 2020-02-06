class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = this.userID;
  }

  fluidConsumedByDate(date) {
    const fluid = this.hydrationData.find(data => {
       return data.date === date;
        console.log(data.numOunces)
    })
     return fluid.numOunces;
  }

//   fluidConsumededWeekly (date) {
//     console.log()
//   }

  fluidConsumedALlTime(id){
    return this.hydrationData.reduce((acc, all) => {
      if(all.userID === id) {
        console.log('made it')
        acc += all.numOunces;
      }
    return acc
    }, 0)
  }
}

if(typeof module !== 'undefined') {
  module.exports = Hydration;
};
