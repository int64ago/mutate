const mutate = require('../lib');

const source = {
  key1: 123,
  key3: 'test3',
  key4: {
    key5: {
      key6: 'Hello',
      key7: 'World'
    }
  }
};

test('source should not be modified', function() {
  const target = mutate(source, 456, 'key1');
  expect(source.key1).toBe(123);
});

test('target is modified', function() {
  const target = mutate(source, 456, 'key1');
  expect(target.key1).toBe(456);
});

test('modify a key not exist', function() {
  const target = mutate(source, 'hello', 'key2');
  expect(target.key2).toBe('hello');
});

test('modify a key in deep root', function() {
  const target = mutate(source, 'hello', 'key4', 'key5', 'key6');
  expect(target.key4.key5.key6).toBe('hello');
});

test('modify a key in deep root not exist', function() {
  const target = mutate(source, 'hello', 'key4', 'key5', 'key8');
  expect(target.key4.key5.key8).toBe('hello');
});
