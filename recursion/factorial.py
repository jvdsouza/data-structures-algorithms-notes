def factorialRecursive(n):
    if n == 2:
        return 2
    else:
        return factorialRecursive(n-1) * n

print(factorialRecursive(5))

def factorialIterative(n):
    factorial = n
    while n > 2:
        factorial = factorial * (n-1)
        n -= 1
    return factorial

print(factorialIterative(5))
