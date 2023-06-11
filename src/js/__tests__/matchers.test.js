import characters from '../app';

test('sorting test', () => {
  const result1 = characters.sort((a, b) => b.health - a.health);
  expect(result1).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
