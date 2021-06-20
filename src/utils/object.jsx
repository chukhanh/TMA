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

export const convertObject = (value) => {
  let array = [];
  array.push(value);
  if (array.length === 0) return false;
  return Object.assign(...array.map((el) => ({ email: el })));
};
