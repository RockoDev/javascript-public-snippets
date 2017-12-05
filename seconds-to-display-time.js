/**
 * Takes an amount of seconds and return it with HH:MM:SS format
 *
 * @param int seconds
 */
function secondsToDisplayTime(seconds) {
  const p = n => (n <= 9) ? '0' + n : n;
  return p(Math.floor((seconds%86400)/3600)) + ':' + p(Math.floor((seconds%3600)/60)) + ':' + p(seconds%60);
}
