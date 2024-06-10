// @ts-nocheck
 export function objectToFormUrlEncoded(obj, prefix) {
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k
      if (prefix) {
        k = Array.isArray(obj[p]) ? prefix + "[]" : prefix + "[" + p + "]"
      } else { k = p }
      let v = obj[p];
      let tmp
      if (v !== null && typeof v === "object") {
        tmp = objectToFormUrlEncoded(v, k)
      } else {
        tmp = k + "=" + encodeURIComponent(v)
      }
      str.push(tmp);
    }
  }
  return str.join("&");
}

