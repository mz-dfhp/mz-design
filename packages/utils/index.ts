export function isArray(arr: any) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

export function deepMerge<T>(target: T, source: T): T {
  if (typeof target !== 'object' || typeof source !== 'object') {
    return source
  }
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key]
      const targetValue = target![key]
      if (typeof sourceValue === 'object') {
        target![key] = deepMerge(targetValue, sourceValue)
      } else {
        target![key] = sourceValue
      }
    }
  }
  return target
}
