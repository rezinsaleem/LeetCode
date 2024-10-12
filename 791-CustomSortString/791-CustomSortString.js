/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const customSortString = (S, T) =>
  T.split('')
    .sort((a, b) => S.indexOf(a) - S.indexOf(b))
    .join('');