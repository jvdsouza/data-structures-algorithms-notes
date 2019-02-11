class Solution:
    def singleNumber(self, nums: 'List[int]') -> 'int':
        hashDict = {}
        for i in nums:
            if i not in hashDict.keys():
                hashDict[i] = 1
            else:
                hashDict[i] += 1
        print(hashDict)
        for key in hashDict.keys():
            print(key)
            print(hashDict[key])
            if hashDict[key] == 1:
                return key

        return 'all values are listed twice'

solve = Solution()
print(solve.singleNumber([4,1,2,1,2]))
