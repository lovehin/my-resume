export function formatDate(date, format = "Y-M-D") {
  if (date === null) {
    return "至今";
  }
  //   "YYYY年MM月DD日 hh:mm:ss";
  let map = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };

  return format.replace(/[YMDhms]/g, function (match) {
    return map[match].toString().padStart(2, "0");
  });
}
