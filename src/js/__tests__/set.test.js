import Team from '../set';

test('test add function', () => {
  const chr1 = {
    name: 'Magician',
  };

  const chr2 = {
    name: 'Spider',
  };

  const chrSet = new Team();
  chrSet.add(chr1);
  chrSet.add(chr2);

  const chrNumber = chrSet.members.size;
  // console.log(chrNumber);

  expect(chrNumber).toBe(2);
});

test('test add function error type', () => {
  const chr1 = {
    name: 'Magician',
  };

  const chrSet = new Team();
  chrSet.add(chr1);

  expect(() => {
    chrSet.add(chr1);
  }).toThrowError('Персонаж уже существует');
});

test('test addAll function', () => {
  const chr1 = {
    name: 'Magician',
  };

  const chr2 = {
    name: 'Batman',
  };

  const chr3 = {
    name: 'Batman2',
  };

  const chrSet = new Team();
  chrSet.addAll(chr1, chr2, chr3, chr2, chr3);

  const chrNumber = chrSet.members.size;
  // console.log(chrNumber);

  expect(chrNumber).toBe(3);
});

test('test toArray function', () => {
  const chr1 = {
    name: 'Magician',
  };

  const chr2 = {
    name: 'Batman',
  };

  const chr3 = {
    name: 'Batman2',
  };

  const chrSet = new Team();
  chrSet.addAll(chr1, chr2, chr3, chr2, chr3);
  chrSet.toArray();

  const result = [
    { name: 'Magician' },
    { name: 'Batman' },
    { name: 'Batman2' },
  ];

  expect(chrSet.toArray()).toEqual(result);
});
