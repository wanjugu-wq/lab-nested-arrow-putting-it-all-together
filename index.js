const createLoginTracker = (
  userInfo = { Username: username, Password: password },
) => {
  let attemptCount = 0;

  return (passwordAttempt = "") => {
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    } else if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else if (passwordAttempt !== userInfo.password) {
      attemptCount++;
      return "Attempt " + attemptCount + ": Login failed";
    }
  };
};
module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};

console.log(createLoginTracker);
