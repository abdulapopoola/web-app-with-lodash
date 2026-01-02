import _ from 'lodash';

export function processUsers(users) {
  const userIndex = _.keyBy(users, 'user');
  const result = _.map(userIndex, 'age');
  return result;
}
