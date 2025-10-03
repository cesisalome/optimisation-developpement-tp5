const add = require('./index');

test('Ajoute 2 nombres', () => {
  expect(add(2, 3)).toBe(5);
});