# 539. Minimum Time Difference
# https://leetcode.com/problems/minimum-time-difference/
# Python solution

class Solution:
    def findMinDifference(self, timePoints: List[str]) -> int:
        # convert to minutes & int
        minArr = [int(point.split(':')[0])*60 + int(point.split(':')[1]) for point in timePoints]

        # sort min -> max
        minArr.sort()

        # compare adjacent values in array to find minimum; return minimum
        self.min = minArr[-1]
        for i in range(len(minArr)):
            diff = 0
            try:
                diff = minArr[i+1] - minArr[i]
            except IndexError:
                diff = 1440 - minArr[i] + minArr[0]
            self.min = diff if diff < self.min else self.min
        return self.min
