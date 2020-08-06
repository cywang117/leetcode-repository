# 11. Container With Most Water
# https://leetcode.com/problems/container-with-most-water
# Python solution

class Solution:
  def maxArea(self, height: List[int]) -> int:
    low, high = 0, len(height) - 1
    product = 0
    while low < high:
      product = max(product, (high-low) * min(height[high], height[low]))
      if height[low] < height[high]:
        low += 1
      else:
        high -= 1
    return product
