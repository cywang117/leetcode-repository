/**
 * 539. Minimum Time Difference
 * https://leetcode.com/problems/minimum-time-difference/
 * Javascript solution
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = (timePoints) => {
  // convert to minutes & int
  let minArr = [];
  for (i = 0; i < timePoints.length; i++)
    minArr.push(Number(timePoints[i].split(':')[0]) * 60 + Number(timePoints[i].split(':')[1]))

  // sort min -> max
  minArr = minArr.sort((f, s) => f - s);

  // map minuteArr (minArr) to differences between adjacent minutes, then return minimum difference
  minArr = minArr.map((val, i, arr) => {
    if (arr[i + 1] !== undefined) {
      return arr[i + 1] - val
    }
    else {
      return 1440 - val + arr[0]
    }
  });

  return Math.min.apply(null, minArr)
}
