# // Given a number N return the index value of the Fibonacci sequence, where the sequence is:
#
# // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
# // the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
#
# //For example: fibonacciRecursive(6) should return 8

def fibonnaciReturn(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibonnaciReturn(n-1) + fibonnaciReturn(n-2)

print(fibonnaciReturn(6))
