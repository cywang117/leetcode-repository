# 227. Basic Calculator II
# https://leetcode.com/problems/basic-calculator-ii/
# Python solution

import math

class Solution:
    def calculate(self, s: str) -> int:
        self.s = s.replace(' ', '')
        if self.s.isdigit():
            return int(s)
        mem = []
        n = 0
        sign = '+'
        for i in range(len(self.s)):
            if self.s[i].isdigit():
                n = n*10 + int(self.s[i])
            else:
                self.calc(n, sign, mem)
                sign = self.s[i][:]
                n = 0
        self.calc(n, sign, mem)
        return sum(mem)

    @staticmethod
    def calc(n, sign, mem):
        if sign == '+':
            mem.append(n)
        elif sign == '-':
            mem.append(-n)
        elif sign == '*':
            mem.append(mem.pop() * n)
        else:
            m = mem.pop()
            if m // n < 0:
                mem.append(math.ceil(m/n))
            else:
                mem.append(m // n)
        return mem
