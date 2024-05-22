function mask(value: string) {
  const template = "+7 (___) ___-__-__",
    def = template.replace(/\D/g, ""),
    val = value.replace(/\D/g, "");
  console.log(template);
  let i = 0,
    newValue = template.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
  i = newValue.indexOf("_");
  if (i !== -1) {
    newValue = newValue.slice(0, i);
  }
  let reg = template.substr(0, value.length).replace(/_+/g,
    function (a) {
      return "\\d{1," + a.length + "}";
    }).replace(/[+()]/g, "\\$&");
  return value
}

export default mask;