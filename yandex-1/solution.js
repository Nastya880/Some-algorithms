function countDays(h, m, s, n) {
  let days = 1;
  for (let i = 0;  i < (n - 1); i++) {
    if (h[i] > h[i + 1]) {
      days += 1;
    } else if (h[i] ==  h[i + 1]) {
      if (m[i] > m[i + 1]) {
        days  += 1;
      } else if (m[i] == m[i + 1]) {
        if (s[i] >= s[i + 1]) {
          days += 1;
        }
      }
    }
  }

  return days;
}

console.log(countDays(22, 31, 10, 12));
