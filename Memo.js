export default function memo(func) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    if (!(key in cache)) {
      cache[key] = func.apply(null, arguments);
    }
    return cache[key];
  }
}
