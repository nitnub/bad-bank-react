import getUserHistory from './getUserHistory'

const sampleUsers = {
  currentUser: 1,
  users: [
    {
      id: 0,
      name: 'John Smith0',
      balance: 10000,
      history: [
        { dateTime: 'dateTime', balance: 10000 },
        { dateTime: 'dateTime', deposit: 100, balance: 10100 },
        { dateTime: 'dateTime', withdrawal: 100, balance: 10000 },
        { dateTime: 'dateTime', withdrawal: 5000, balance: 5000 },
        { dateTime: 'dateTime', deposit: 1100, balance: 6100 },
        { dateTime: 'dateTime', withdrawal: 0, deposit: 101, balance: 6201 },
      ],
    },
    {
      id: 1,
      name: 'John Smith1',
      balance: 10000,
      history: [
        { dateTime: 'dateTime', balance: 10000 },
        { dateTime: 'dateTime', deposit: 100, balance: 10100 },
        { dateTime: 'dateTime', withdrawal: 100, balance: 10000 },
        { dateTime: 'dateTime', withdrawal: 5000, balance: 5000 },
        { dateTime: 'dateTime', deposit: 1100, balance: 6100 },
        { dateTime: 'dateTime', withdrawal: 0, deposit: 100, balance: 6200 },
      ],
    },
    {
      id: 2,
      name: 'John Smith2',
      balance: 10000,
      history: [
        { dateTime: 'dateTime', balance: 10000 },
        { dateTime: 'dateTime', deposit: 100, balance: 10100 },
        { dateTime: 'dateTime', withdrawal: 100, balance: 10000 },
        { dateTime: 'dateTime', withdrawal: 5000, balance: 5000 },
        { dateTime: 'dateTime', deposit: 1100, balance: 6100 },
        { dateTime: 'dateTime', withdrawal: 0, deposit: 107, balance: 6207 },
      ],
    },
  ],
};


describe('test getUserHistory()', () => {
  it('pulls correct user\'s transaction history', () => {
    expect(getUserHistory(sampleUsers)).toEqual([
      { dateTime: 'dateTime', balance: 10000 },
      { dateTime: 'dateTime', deposit: 100, balance: 10100 },
      { dateTime: 'dateTime', withdrawal: 100, balance: 10000 },
      { dateTime: 'dateTime', withdrawal: 5000, balance: 5000 },
      { dateTime: 'dateTime', deposit: 1100, balance: 6100 },
      { dateTime: 'dateTime', withdrawal: 0, deposit: 100, balance: 6200 },
    ])
  })
})






