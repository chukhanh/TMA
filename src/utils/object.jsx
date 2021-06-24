export const checkObject = (person, account) => {
  let check = true;
  if (account.length === 0) check = false;
  else if (person.length === 0) check = false;
  // eslint-disable-next-line array-callback-return
  else {
    account.filter((user) => {
      return Object.keys(person).every((account) => {
        person[account] === user[account]
          ? (check = true)
          : (check = false);
      });
    });
  }

  return check;
};
// return check;

export const convertObject = (value) => {
  let array = [];
  array.push(value);
  if (array.length === 0) return false;
  return Object.assign(...array.map((el) => ({ email: el })));
};

export const filtered = (users , filter) => {
  var result = [];
  for (var prop in filter) {
      if (filter.hasOwnProperty(prop)) {

          //at the first iteration prop will be address
          for (var i = 0; i < filter.length; i++) {
              if (users[i][prop] === filter[prop]) {
                  result.push(users[i]);
              }
          }
      }
  }
  return result;
}

export const convertPass = (value) => {
  let array = [];
  array.push(value);
  if (array.length === 0) return false;
  return Object.assign(...array.map((el) => ({ password: el })));
};

export function findByTemplate(allPersons , template) {
  return allPersons.filter(person => {
      return Object.keys(template).every(propertyName => person[propertyName] === template[propertyName]);
  });
}