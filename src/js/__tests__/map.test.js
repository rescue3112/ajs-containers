import ErrorRepository from '../map';

test('test translate function 1', () => {
  const map = new ErrorRepository();
  const result = map.translate(400);
  //   console.log(result);

  expect(result).toBe('Bad Request');
});

test('test translate function 2', () => {
  const map = new ErrorRepository();
  const result = map.translate(403);

  expect(result).toBe('Forbidden');
});

test('test translate function 3', () => {
  const map = new ErrorRepository();
  const result = map.translate(404);

  expect(result).toBe('Not Found');
});

test('test translate function 3', () => {
  const map = new ErrorRepository();
  const result = map.translate(500);
  //   console.log(result);

  expect(result).toBe('Unknown error');
});