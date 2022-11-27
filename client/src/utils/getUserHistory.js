import getCurrentUser from "./getCurrentUser";

function getUserHistory(context) {
  return getCurrentUser(context).history
}

export default getUserHistory;