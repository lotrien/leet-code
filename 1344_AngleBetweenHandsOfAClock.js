/**
 * 1344. Angle Between Hands of a Clock
 */
const angleClock = function(h, m) {
  if (h < 0 || m < 0 || h > 12 || m > 60) {
    return;
  }

  if (h === 12) {
    h = 0;
  }

  if (m === 60) {
    m = 0;
  }

  const hourAngle = 0.5 * (h * 60 + m);
  const minuteAngle = 6 * m;

  const angle = Math.abs(hourAngle - minuteAngle);

  return Math.min(360 - angle, angle);
}
