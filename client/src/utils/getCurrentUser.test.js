// const getCurrentUser = require('./getCurrentUser')
import getCurrentUser from './getCurrentUser'

describe('test getCurrentUser', () => {
  const testContext = {
    currentUser: 1,
    users: [
         {id: 0, name: 'John', email: 'john@email.com', password: '!!22qqQQaa', balance: 1000}, 
         {id: 1, name: 'Bob Smith', email: 'bob@email.com', password: '!!22qqQQaa', balance: 1000}, 
         {id: 2, name: 'Steve Stevenson', email: 'steve@email.com', password: '!!22qqQQaa', balance: 1000}, 
         ],
    }
  it('gets expected user from user list', () => {
    expect(getCurrentUser(testContext)).toEqual({id: 1, name: 'Bob Smith', email: 'bob@email.com', password: '!!22qqQQaa', balance: 1000});
  })
})