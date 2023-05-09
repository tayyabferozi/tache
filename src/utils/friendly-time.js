function friendlyTime(d) {
  let date = new Date(d);
  var delta = Math.round((+new Date() - date) / 1000);

  var minute = 60,
    hour = minute * 60,
    day = hour * 24;
  // week = day * 7;

  var fuzzy;

  if (delta < 10) {
    fuzzy = "Just Now";
  } else if (delta < minute) {
    fuzzy = delta + "s ago";
  } else if (delta < 2 * minute) {
    fuzzy = "1m ago";
  } else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + "m ago";
  } else if (Math.floor(delta / hour) === 1) {
    fuzzy = "1h ago";
  } else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + "h ago";
  } else if (delta < day * 2) {
    fuzzy = "yesterday";
  } else {
    fuzzy = Math.floor(delta / day) + "d ago";
  }

  return fuzzy;
}

export default friendlyTime;
