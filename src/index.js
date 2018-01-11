const fn = (params, index, value, ...keys) => {
  if (index === keys.length) return value;
  const key = keys[index];
  return {
    ...params,
    [key]: fn(params[key] || {}, index + 1, value, ...keys),
  };
};

/**
 * Modify object and return immutable object
 * @param {object} params The source object
 * @param {any} value The value to be set
 * @param {string[]} keys The keys in chain
 * @returns {object}
 */
module.exports = (params, value, ...keys) => {
  return fn(params, 0, value, ...keys);
};
