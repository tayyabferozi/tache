export const timeCombinations = [];

["AM", "PM"].forEach((el, idx) => {
  new Array(12).fill(0).forEach((el2, idx2) => {
    new Array(60).fill(0).forEach((el3, idx3) =>
      timeCombinations.push({
        label:
          (idx2 + 1).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          }) +
          ":" +
          idx3.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          }) +
          " " +
          el,
      })
    );
  });
});

const daysNames = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
].map((el, idx) => ({ label: el }));

export function getDaysInMonth(month, year = new Date().getFullYear()) {
  const monthIdx = monthNames.findIndex((el) => {
    return el.label === month;
  });
  var date = new Date(year, monthIdx, 1);
  console.log(monthIdx);
  var days = [];
  while (date.getMonth() === monthIdx) {
    // days.push(new Date(date));
    const d = new Date(date);
    days.push({ label: daysNames[d.getDay()] + " " + d.getDate() });
    date.setDate(date.getDate() + 1);
  }
  return days;
}
