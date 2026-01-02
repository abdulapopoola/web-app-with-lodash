import { processUsers } from '../src/utils/lodash-utils';

describe('processUsers', () => {
  it('should correctly process a list of users', () => {
    const users = [
      { user: 'barney', age: 36 },
      { user: 'fred', age: 40 },
      { user: 'pebbles', age: 1 },
    ];
    const expected = [36, 40, 1];
    expect(processUsers(users)).toEqual(expected);
  });

  it('should return an empty array if no users are provided', () => {
    const users = [];
    const expected = [];
    expect(processUsers(users)).toEqual(expected);
  });

  it('should handle users with missing age property gracefully', () => {
    const users = [
      { user: 'barney' },
      { user: 'fred', age: 40 },
    ];
    const expected = [undefined, 40]; // Lodash map returns undefined for missing properties
    expect(processUsers(users)).toEqual(expected);
  });
});
