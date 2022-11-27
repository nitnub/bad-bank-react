function getCurrentUser(context) {
  const [currentUser] = context.users.filter(
    (user) => user.id === context.currentUser
  );
  return currentUser;
}

export default getCurrentUser;