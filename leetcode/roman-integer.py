class Solution:
    def romanToInt(self, s: 'str') -> 'int':
        romanLength = len(s)

        if s == None or romanLength == 0 or s == '':
            return 0

        romanDict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

        Integer = romanDict[s[0]]

        for i in range(0, romanLength-1):
            currentVal = romanDict[s[i]]
            nextVal = romanDict[s[i+1]]

            if currentVal >= nextVal:
                Integer += nextVal
            else:
                Integer = Integer - 2*currentVal + nextVal

        return Integer

solution = Solution()
print(solution.romanToInt('MCMXCIV'))
