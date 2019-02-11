class Solution:
    def isAnagram(self, s: 'str', t: 'str') -> 'bool':
        if len(s) != len(t):
            return False

        letterDict = {}

        for i in range(0, len(t)):
            print(letterDict)
            if t[i] not in letterDict.keys():
                letterDict[t[i]] = 1
            else:
                letterDict[t[i]] += 1

        for j in range(0, len(s)):
            print(letterDict)
            if s[j] in letterDict.keys():
                letterDict[s[j]] -= 1
                if letterDict[s[j]] == 0:
                    del letterDict[s[j]]

            else:
                return False

        return True

soln = Solution()

print(soln.isAnagram('aba', 'aab'))
