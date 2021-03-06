let userNameDisplay = document.querySelector('.nav-bar');
let hydrationDisplay = document.querySelector('.hydration-section');
let personalDisplay = document.querySelector('.personal-info');
let friendDisplay = document.querySelector('.friends-list');
let userSleepDisplay = document.querySelector('.user-sleep-data')
let allUsersSleepDisplay = document.querySelector('.all-user-sleep')
let allUsersActivityDisplay = document.querySelector('.all-user-calculatiuons')
let userActivityDisplay = document.querySelector('.step-calculations');
let allActivity;
let allSleep;
let currentUser;
let allUsers;
let allHydration;
let userActivity;

window.onload = loadHandler;

function loadHandler() {
  loadUser()
  loadAllUsers()
  displayUserInfo()
  displayFriends()
  displayPersonalInfo()
  loadHydrationData()
  displayHydrationInfo()
  loadSleepData()
  displayUserSleepInfo()
  loadAllSleepData()
  displayAllUsersSleepInfo()
  loadAllAvctivityData()
  displayAllUserActivityInfo()
  loadUserActivityData()
  displayUserActivityInfo()
}

function loadUser() {
  shuffleUser(userData);
  currentUser = new User(userData[0]);
}

function loadAllUsers() {
  allUsers = new UserRepo(userData);
}

function loadHydrationData() {
  allHydration = new Hydration(hydrationData, currentUser.id)
}

function loadSleepData() {
  allSleep = new Sleep(sleepData, currentUser.id)
}

function loadAllSleepData() {
  allUserSleepData = new SleepRepo(sleepData)
}

function loadAllAvctivityData() {
  allUserActivityData = new ActivityRepo(activityData);
}

function loadUserActivityData() {
  userActivity = new Activity(activityData, currentUser)
}

function displayUserInfo() {
  userNameDisplay.innerHTML = `
  <h1 class = 'heading'>Welcome to Activity Tracker!</h1>
  <div class = 'user-greeting'>
  <h2 class = 'user-name' >Hello ${currentUser.returnUserName()}!</h2>
  <img class = 'user-name' src="../data/assets/icons8-user-50.png" alt="">
  </div>
  <div class = 'user-step-info'>
  <h4 class = 'user-step-goal'>Check Out Your Current Daily Step Goal: ${currentUser.dailyStepGoal}</h2>
  <h4 class = 'user-stride-length'>Here is your Current Stride Length:${currentUser.strideLength}</h2>
  <h4 class = 'users-step-average'>All Users Step Average: ${allUsers.averageStepsAllUsers()}</h2>
  </div>`
}

function displayPersonalInfo() {
  personalDisplay.innerHTML = `
  <h2>Personal Info</h2>
  <h3>Email: ${currentUser.email}</h3>
  <h3>Address: ${currentUser.address}</h3>
   `
}

function displayFriends() {
  let homies = currentUser.findFriendsNames(userData);
  homies.forEach(homie => {
  friendDisplay.innerHTML +=`
  <div class ='friend-card'>
  <h3>Name: ${(homie.name.split(' ')[0])}</h3>
  <h3>steps: ${homie.stepGoal}</h3>
  </div>
   `
  })
}

function displayHydrationInfo() {
 hydrationDisplay.innerHTML = `
 <h3>- Average Fluid Consumed All Time: ${allHydration.fluidConsumedALlTime(currentUser.id)}</h3>
 <h3>- Fluid consumed today: ${allHydration.fluidConsumedByDate("2019/06/16", currentUser.id)}</h3>
 <h3>- Fluid consumed over a week: ${allHydration.fluidConsumededWeekly(currentUser.id, "2019/06/22")}</h3>`
}

function displayUserSleepInfo() {
  userSleepDisplay.innerHTML = `
  <h3>- Hours Slept Today: ${allSleep.hoursSlept("2019/06/15")}</h3>
  <h3>- Average Hours Slept: ${allSleep.avgHoursSlept("2019/06/15")}</h3>
  <h3>- User sleep quality for the week: ${allSleep.qualitySleptWeekOf("2019/06/15")}</h3>
  <h3>- User Sleep hours for the week: ${allSleep.hoursSleptWeekOf("2019/06/15")}</h3>  `
}

function displayAllUsersSleepInfo() {
  let highestSleep = allUserSleepData.usersWithMostSleep("2019/06/15");
  let highestSleepQuality = allUserSleepData.usersWithHigestSleepQuality("2019/06/15");

  allUsersSleepDisplay.innerHTML = `
  <h3>- All time average sleep quality: ${allUserSleepData.averageSleepQuality()}</h3>
  <h3>- All Time User Highest Hours Slept: ${highestSleep.hoursSlept}</h3>
  <h3>- All Time User Highest Sleep Quality: ${highestSleepQuality.sleepQuality}</h3>
  `
}

function displayAllUserActivityInfo() {
  allUsersActivityDisplay.innerHTML = `
  <h3>- All Users Minutes Average: ${allUserActivityData.allUserStairsClimbedByDate("2019/06/15")}</h3>
  <h3>- All Users Average Steps Taken: ${allUserActivityData.averageStepsTakenByDate("2019/06/15")}</h3>
  <h3>- All Users Average Stairs Climbed: ${allUserActivityData.averageMinutesActiveByDate("2019/06/15")}</h3>  `
}

function displayUserActivityInfo() {
  userActivityDisplay.innerHTML = `
  <h3>- User Miles Walked: ${userActivity.milesWalked("2019/06/22", currentUser)}</h3>
  <h3>- User Minutes Acitve: ${userActivity.activeMins("2019/06/22", currentUser)}</h3>
  <h3>- User Step Goal Reached: ${userActivity.stepGoal("2019/06/22", currentUser)}</h3>
  <h3>- Date Exceeded Step Goal: ${userActivity.daysStepGoal(currentUser)}</h3>
  <h3>- Stair Climb Record: ${userActivity.stairClimbRecord()}</h3>
  <h3>- AVerage Minutes Active: ${userActivity.avgMinsActive("2019/06/22")}</h3>
  `
}

function shuffleUser(array) {
  array.sort(() => Math.random() - 0.5);
}
