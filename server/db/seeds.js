use hotel;
db.dropDatabase();

db.guests.insertMany([
  {
  name: "James",
  email: "james@james.com",
  isCheckedIn: true
  },

  {
  name: "Mike",
  email: "mike@mike.com",
  isCheckedIn: false
  },

  {
  name: "John",
  email: "john@john.com",
  isCheckedIn: true
  }
]);
