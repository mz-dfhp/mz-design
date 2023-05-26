export function isArray(arr: any) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}
